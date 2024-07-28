import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({data}) => {
    return(
        <ol className={css.list}>
        {data.map(element => (
            <li key={element.id}>
                <Link to={`/movies/${element.id}`}>{element.original_title}</Link>
            </li>
        ))}
    </ol>
    )
}

export default MovieList;