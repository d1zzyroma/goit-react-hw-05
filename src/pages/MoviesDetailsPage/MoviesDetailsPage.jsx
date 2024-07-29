import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import css from "./MoviesDetailsPage.module.css";
import clsx from "clsx";

const MoviesDetailsPage = () => {
    const [details, setDetails] = useState({});
    const { moviesId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const backLocationRef = useRef(location.state?.from || '/');

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await getMovieDetails(moviesId);
                setDetails(response);
            } catch (error) {
                console.log(error);
            }
        };

        getMovies();
    }, [moviesId]);

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    const handleGoBack = () => {
        navigate(backLocationRef.current);
    };

    return (
        <div>
            <button className={css.goBackButton} onClick={handleGoBack}>Go back</button>
            <div className={css.wrapper}>
                <div className={css.posterWrapper}>
                    {details.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                            alt={details.original_title}
                            className={css.poster}
                        />
                    )}
                </div>
                <div className={css.detailsWrapper}>
                    <div className={css.infoWrapper}>
                        <h3 className={css.title}>{details.original_title}</h3>
                        <p className={css.genreItem}>User Score: {details.vote_average}</p>
                    </div>
                    <div className={css.infoWrapper}>
                        <h3>Overview</h3>
                        <p className={css.genreItem}>{details.overview}</p>
                    </div>
                    <div className={css.infoWrapper}>
                        <h3>Genres:</h3>
                        <ul className={css.genresList}>
                            {details.genres && details.genres.map((element) => (
                                <li key={element.id} className={css.genreItem}>{element.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={css.addInf}>
                <p>Addition information:</p>
                <ul className={css.list}>
                    <li><NavLink to="cast" className={buildLinkClass}>Cast</NavLink></li>
                    <li><NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default MoviesDetailsPage;
