import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const NewsDetails = () => {
  const [news, setNews] = useState(null);
  const { newsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/news/${newsId}`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => console.log(err));
  }, [newsId]);

  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <div className="news-detail-container">
          <img src={news.photo} alt={`Image of ${news.title}`}></img>
          <div>
            <h2>{news.title}</h2>
            <p>
              {news.author} - {news.date}
            </p>
            <p>{news.story}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
