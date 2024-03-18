import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

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

      <div>
        {" "}
        Reviews
        {reviews.map((review) => {
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
                            currentRating <= review.rating
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

/*  {
      "id": "4",
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in tales of violence and redemption.",
      "year": "1994",
      "director": "Quentin Tarantino",
      "mainCast": "John Travolta, Uma Thurman, Samuel L. Jackson",
      "oscar": true,
      "genre": "Crime, Drama",
      "writers": "Quentin Tarantino, Roger Avary",
      "funFact": "The briefcase's contents are never revealed, sparking widespread speculation and theories among fans.",
      "famousQuote": "Say 'what' again, I dare you, I double dare you motherfucker, say what one more Goddamn time!",
      "imageUrl": "https://static.posters.cz/image/750/posters/pulp-fiction-cover-i1288.jpg"
    },*/
