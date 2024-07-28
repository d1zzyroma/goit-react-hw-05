import { useEffect, useState } from "react";
import { getHomeMovies } from "../../services/api";
import css from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await getHomeMovies();
                console.log(response);
                setData(response.results);
            } catch (error) {
                console.log(error);
            }
        }

        getMovies();
    }, []); 

    return (
        <>
            <h2 className={css.title}>Trending today</h2>
            <MovieList data={data}/>
        </>
    );
}

export default HomePage;
