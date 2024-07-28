import { useEffect, useState } from "react";
import { getHomeMovies } from "../../services/api";
import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

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
            <ol className={css.list}>
                {data.map(element => (
                    <li key={element.id}>
                        <Link to={`/movies/${element.id}`}>{element.original_title}</Link>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default HomePage;
