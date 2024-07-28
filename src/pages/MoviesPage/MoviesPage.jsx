import { useState, useEffect } from "react";
import { getFilteredMovies } from "../../services/api";
import { Link, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterValue, setFilterValue] = useState(searchParams.get('query') || '');
    const [movies, setMovies] = useState([]);

    const handleChangeFilter = (newValue) => {
        setFilterValue(newValue);
        setSearchParams({ query: newValue });
    };

    useEffect(() => {
        const fetchFilteredMovies = async () => {
            if (filterValue.trim() === '') {
                setMovies([]); 
                return;
            }
            try {
                const response = await getFilteredMovies(filterValue);
                setMovies(response.results); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilteredMovies();
    }, [filterValue]);

    return (
        <div>
            <input
                type="search"
                value={filterValue}
                placeholder="Search movies"
                onChange={e => handleChangeFilter(e.target.value)}
            />
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;
