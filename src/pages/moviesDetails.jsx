import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] =useState([])

  const { movieId } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));

      axios
        .get(`http://localhost:3000/reviews?moviedId=${movieId}`)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((err) => console.log(err));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <img src={movie.imageUrl}></img>
        <p>{movie.description}</p>
      </div>
      <div>
        <button onClick={() => nav(`/add-review/${movie.id}`)}>
          Add Review
        </button>
      </div>

    <div> Reviews 
{reviews.map((review)=> {
  return (
    <div>
      <h3>{review.title}</h3>
      <p>{review.description}</p>
      <p>{review.rating}</p>
      <p>{review.createdDate}</p>
      <div id="star-rating">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                checked={review.rating === currentRating}
              />
              <span
                className="star"
                style={{
                  color:
                    currentRating <= (review.rating)
                      ? "#9B56A8" //change color of heart
                      : "#e4e5e9", //maintain empty heart white
                }}
              >
                &hearts;
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
})}

    </div>
    </>
  );
};

export default MoviesDetails;
