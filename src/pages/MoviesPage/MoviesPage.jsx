import { useState, useEffect } from "react";
import { getFilteredMovies } from "../../services/api";
import { Link } from "react-router-dom";


const MoviesPage = () => {
    const [filterValue, setFilterValue] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChangeFilter = (newValue) => {
        setFilterValue(newValue);
    };

    useEffect(() => {
        const fetchFilteredMovies = async () => {
            if (filterValue.trim() === '') {
                setMovies([]); // Clear movies if the search field is empty
                return;
            }
            try {
                const response = await getFilteredMovies(filterValue);
                setMovies(response.results); // Assuming the API response has a 'results' property
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilteredMovies();
    }, [filterValue]);

    return (
        <div >
            <input
                type="search"
                value={filterValue}
                placeholder="Search movies"
                onChange={e => handleChangeFilter(e.target.value)}
                
            />
            <ul >
                {movies.map(movie => (
                    <li key={movie.id} >
                        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;
