import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie, getGenres } from '../tmdb-api'; 

const router = express.Router();

// movie routes to be added

router.get('/discover', asyncHandler(async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const discoverMovies = await getMovies(currentPage);
    res.status(200).json(discoverMovies);
}));

router.get('/movie/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const movieDetails = await getMovie(id);
    res.status(200).json(movieDetails);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

export default router;