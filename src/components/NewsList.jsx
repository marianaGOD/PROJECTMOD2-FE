import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${API_URL}/news`)
      .then((response) => {
        const shuffledNews = shuffle(response.data); // Shuffle news items
        const selectedNews = shuffledNews.slice(0, 6); // Select first 6 items
        setNews(selectedNews);
      })
      .catch((error) => {
        console.log("Broken news", error);
      });
  }, []);

  // Function to shuffle array
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div>
      <h1>Latest News</h1>
      <div className="news-container">
        {news.map((element) => (
          <div className="news-article" key={element.id}>
            <div className="list-group-each-news">
              <img src={element.photo} alt={element.title} />
              <h2>
                <Link to={`news/${element.id}`}>
                  {element.title.length > 55
                    ? `${element.title.substring(0, 55)}...`
                    : element.title}
                </Link>
              </h2>
              <div className="button-wrapper">
                <Link to={`news/${element.id}`}>Continue Reading</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
