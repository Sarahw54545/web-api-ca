export const getMovies = (pageNo) => {
  return fetch(
    `http://localhost:8080/api/movies/discover?page=${pageNo}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(
    `http://localhost:8080/api/movies/movie/${id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getGenres = () => {
  return fetch(
    `http://localhost:8080/api/movies/genres`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/movie/${id}/images`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/movie/${id}/reviews`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getUpcomingMovies = (pageNo) => {
  return fetch(
   `http://localhost:8080/api/movies/upcoming?page=${pageNo}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { movie_id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/movie/${movie_id}/credits`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getNowPlaying = (pageNo) => {
  return fetch(
    `http://localhost:8080/api/movies/nowPlaying?page=${pageNo}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPerson = (args) => {
  const [, idPart] = args.queryKey;
  const { person_id } = idPart;

  return fetch(
    `http://localhost:8080/api/movies/person/${person_id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPopPeople = (pageNo) => {
  return fetch(
    `http://localhost:8080/api/movies/popPeople?page=${pageNo}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPersonsCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { person_id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/person/${person_id}/credits`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};