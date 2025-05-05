import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 

const router = express.Router();

// movie routes to be added

router.get('/discover', asyncHandler(async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const discoverMovies = await getMovies(currentPage);
    res.status(200).json(discoverMovies);
}));

export default router;