import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/news`)
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
      <div className="news-container">
        <h1>Latest News</h1>

        <div>
          {news &&
            news.map((element) => {
              return (
                //   <Link to={`${element.id}`} key={element.id}>
                <div key={element.id} className="list-group-each-news">
                  <h2>{element.title}</h2>
                  <p>
                    {element.date} {element.author}
                  </p>
                  <img src={element.photo} />
                  <p>{element.story}</p>
                </div>
                //   </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
