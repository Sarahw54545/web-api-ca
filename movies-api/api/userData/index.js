import express from 'express';
import UserData from './userDataModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Function to Get OR Create a UserData document for a user if they don't have one based on their user object ID
//Will be Used in all API Calls
const getOrCreateUserData = async (userId) => {
    let userData = await UserData.findOne({ userId });

    if (!userData) {
        userData = await UserData.create({ userId });
    }
    return userData;
};

// API Calls

// Get a user's userData
router.get('/', asyncHandler(async (req, res) => {
    const userData = await getOrCreateUserData(req.user._id);
    res.status(200).json(userData);
}));

// Get a User's Array of Favourite Movies
router.get('/favorites', asyncHandler(async (req, res) => {
    const userData = await getOrCreateUserData(req.user._id);
    res.status(200).json({ favorites: userData.favorites });
}));

// Get a User's Array of Movies Added to Their Watchlist
router.get('/watchlist', asyncHandler(async (req, res) => {
    const userData = await getOrCreateUserData(req.user._id);
    res.status(200).json({ watchlist: userData.watchlist });
}));

// Add (push) a Movie to Favorites Array
router.post('/favorites', asyncHandler(async (req, res) => {
    const { movieId } = req.body;

    if (!movieId) {
        return res.status(400).json({ message: 'movieId is required' });
    }
    const userData = await getOrCreateUserData(req.user._id);

    if (!userData.favorites.includes(movieId)) {
        userData.favorites.push(movieId);
        await userData.save();
    }
    res.status(200).json({ message: 'Added Movie to Favorites', favorites: userData.favorites });
}));

// Remove (Filter) a Movie from Favorites Array
router.delete('/favorites/:movieId', asyncHandler(async (req, res) => {
    const userData = await getOrCreateUserData(req.user._id);

    userData.favorites = userData.favorites.filter(id => id !== req.params.movieId); // Creates a new favorites array that only includes the Movie IDs that are not the one being removed
    await userData.save();

    res.status(200).json({ message: 'Movie Removed from Favorites', favorites: userData.favorites });
}));

// Add (push) a Movie to Watchlist Array
router.post('/watchlist', asyncHandler(async (req, res) => {
    const { movieId } = req.body;

    if (!movieId) {
        return res.status(400).json({ message: 'movieId is required' });
    }
    const userData = await getOrCreateUserData(req.user._id);

    if (!userData.watchlist.includes(movieId)) {
        userData.watchlist.push(movieId);
        await userData.save();
    }
    res.status(200).json({ message: 'Added Movie to Watchlist', watchlist: userData.watchlist });
}));

// Remove (Filter) a Movie from Watchlist Array
router.delete('/watchlist/:movieId', asyncHandler(async (req, res) => {
    const userData = await getOrCreateUserData(req.user._id);

    userData.watchlist = userData.watchlist.filter(id => id !== req.params.movieId); // Creates a new favorites array that only includes the Movie IDs that are not the one being removed
    await userData.save();

    res.status(200).json({ message: 'Movie Removed from Watchlist', watchlist: userData.watchlist });
}));

export default router;