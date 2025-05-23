import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie, getGenres, getMovieImgs, getMovieReviews, getUpcomingMovies, getMovieCredits, getNowPlaying, getPerson } from '../tmdb-api'; 

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

router.get('/movie/:id/images', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const movieImages = await getMovieImgs(id);
    res.status(200).json(movieImages);
}));

router.get('/movie/:id/reviews', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const movieReviews = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const upcomingMovies = await getUpcomingMovies(currentPage);
    res.status(200).json(upcomingMovies);
}));

router.get('/movie/:id/credits', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const movieCredits = await getMovieCredits(id);
    res.status(200).json(movieCredits);
}));

router.get('/nowPlaying', asyncHandler(async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const nowPlayingMovies = await getNowPlaying(currentPage);
    res.status(200).json(nowPlayingMovies);
}));

router.get('/person/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const personDetails = await getPerson(id);
    res.status(200).json(personDetails);
}));

export default router;