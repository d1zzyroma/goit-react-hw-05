import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const MovieCast = () => {
    const { moviesId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            try {
                const response = await getMovieCast(moviesId);
                setCast(response.cast); // Assuming the response has a 'cast' property
                console.log(response.cast);
            } catch (error) {
                console.log(error);
            }
        };
        getCast();
    }, [moviesId]);

    return (
        <div className={css.castContainer}>
            <ul className={css.castList}>
                {cast.map((element) => (
                    <li key={element.id} className={css.castItem}>
                        <div className={css.castImageWrapper}>
                            {element.profile_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${element.profile_path}`}
                                    alt={element.name}
                                    className={css.castImage}
                                />
                            )}
                        </div>
                        <div className={css.castDetails}>
                            <p className={css.castName}>---{element.name}</p>
                            <p className={css.castCharacter}>Character: {element.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
