import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState();

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  useEffect(() => {
    axios
      .get(`${API_URL}/news`)
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.log("Broken news", error);
      });
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <div className="news-container">
        {news &&
          news.map((element) => {
            return (
              // <Link to={`${element.id}`} key={element.id}>
              //   <div className="list-group-each-news">
              //     <img src={element.photo} />
              //     <h2>{element.title}</h2>
              //   </div>

              <div className="news-article">
                <div className="list-group-each-news">
                  <img src={element.photo} />
                  <h2>
                    <Link to={`${element.id}`} key={element.id}>
                      {element.title.length > 55
                        ? `${element.title.substring(0, 55)}...`
                        : element.title}
                    </Link>
                  </h2>
                  <div className="button-wrapper">
                    <Link to={`${element.id}`} key={element.id}>
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>

              // </Link>
            );
          })}
      </div>
    </div>
  );
}

export default NewsList;
