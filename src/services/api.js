import axios from "axios";

export const getHomeMovies = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
            params: {
                language: 'en-US',
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1OWRiNzhmYzJmMDQxNWJiMmEyMzY3MGJkOGM2YyIsIm5iZiI6MTcyMTk5ODUxNS44Mjk4ODIsInN1YiI6IjY2YTM5Yjk2Y2NkZGNmYmExMDgxMTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5V4EZ8bndsYSkfuR9jUjrJfBWU_ftw2GuYyfrhivz4'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}




export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                language: 'en-US',
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1OWRiNzhmYzJmMDQxNWJiMmEyMzY3MGJkOGM2YyIsIm5iZiI6MTcyMTk5ODUxNS44Mjk4ODIsInN1YiI6IjY2YTM5Yjk2Y2NkZGNmYmExMDgxMTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5V4EZ8bndsYSkfuR9jUjrJfBWU_ftw2GuYyfrhivz4'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getMovieCast = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
            params: {
                language: 'en-US',
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1OWRiNzhmYzJmMDQxNWJiMmEyMzY3MGJkOGM2YyIsIm5iZiI6MTcyMTk5ODUxNS44Mjk4ODIsInN1YiI6IjY2YTM5Yjk2Y2NkZGNmYmExMDgxMTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5V4EZ8bndsYSkfuR9jUjrJfBWU_ftw2GuYyfrhivz4'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getMovieRew = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
            params: {
                language: 'en-US',
                page: 1,
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1OWRiNzhmYzJmMDQxNWJiMmEyMzY3MGJkOGM2YyIsIm5iZiI6MTcyMTk5ODUxNS44Mjk4ODIsInN1YiI6IjY2YTM5Yjk2Y2NkZGNmYmExMDgxMTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5V4EZ8bndsYSkfuR9jUjrJfBWU_ftw2GuYyfrhivz4'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getFilteredMovies = async (value) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                language: 'en-US',
                page: 1,
                query: value,
                include_adult: false
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1OWRiNzhmYzJmMDQxNWJiMmEyMzY3MGJkOGM2YyIsIm5iZiI6MTcyMTk5ODUxNS44Mjk4ODIsInN1YiI6IjY2YTM5Yjk2Y2NkZGNmYmExMDgxMTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5V4EZ8bndsYSkfuR9jUjrJfBWU_ftw2GuYyfrhivz4'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


