import { useEffect, useState } from "react";
import { getMovieRew } from "../../services/api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { moviesId } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await getMovieRew(moviesId);
                setReviews(response.results || []);
            } catch (error) {
                console.log(error);
            }
        };

        getReviews();
    }, [moviesId]);

    return (
        <div>
            {reviews.length === 0 ? (
                <p>No reviews available.</p>
            ) : (
                reviews.map((review, index) => (
                    <div key={index}>
                        <p className={css.title}>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieReviews;
