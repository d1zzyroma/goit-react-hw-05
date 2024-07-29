import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({data}) => {
    const location = useLocation()
    return(
        <ol className={css.list}>
        {data.map(element => (
            <li key={element.id}>
                <Link to={{pathname:`/movies/${element.id}`, state: {from:location}}}>{element.original_title}</Link>
            </li>
        ))}
    </ol>
    )
}

export default MovieList;