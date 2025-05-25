export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const getFavorites = async () => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req
    const res = await fetch(`http://localhost:8080/api/userData/favorites`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return res.json();
};

export const getWatchlist = async () => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req
    const res = await fetch(`http://localhost:8080/api/userData/watchlist`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return res.json();
};

export const addToFavorites = async (data) => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req

    const res = await fetch(`http://localhost:8080/api/userData/favorites`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        }
    )
    return res.json();
};

export const addToWatchlist = async (data) => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req
    const res = await fetch(
        `http://localhost:8080/api/userData/watchlist`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        }
    )
    return res.json();
};

export const deleteFromFavorites = async (id) => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req
    const res = await fetch(
        `http://localhost:8080/api/userData/favorites/${id}`,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return res.json();
};

export const deleteFromWatchlist = async (id) => {
    let token = localStorage.getItem("token"); // Get Bearer Token for User From Local Storage
    if (token.toLowerCase().startsWith("bearer ")) { token = token.slice(7); } // Bug with BEARER being included in header in req
    const res = await fetch(
        `http://localhost:8080/api/userData/watchlist/${id}`,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return res.json();
};