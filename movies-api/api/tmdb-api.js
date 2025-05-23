import fetch from 'node-fetch';

export const getMovies = async (pageNo) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNo}`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
  );
  
if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
  };

  export const getGenres = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getMovieImgs = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
  );
  
if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
  };

  export const getMovieReviews = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
  );
  
if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
  };

  export const getUpcomingMovies = async (pageNo) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&page=${pageNo}`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getMovieCredits = async (movie_id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_KEY}`
  );
  
if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
  };

    export const getNowPlaying = async (pageNo) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&page=${pageNo}`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};