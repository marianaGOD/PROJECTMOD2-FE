import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [outOfNews, setOutOfNews] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const loadMore = () => {
    return setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page === 0) {
      setPage(1);
      return;
    }

    const getNews = async (limit = null, page = null, news = []) => {
      try {
        const params = { _limit: limit, _page: page };
        const request = await axios.get(`${API_URL}/news`, { params });
        const response = await request.data;

        console.log("response", response);
        if (response.length === 0) {
          console.log("now we would be out of news");
          setOutOfNews(true);
          let button = document.getElementById("load-more");
          button.style.display = "none";
          return;
        }
        setNews((prevNews) => [...prevNews, ...response]);
        return response;
      } catch (error) {
        console.error("had an error fetching news from database", error);
      }
    };
    getNews(6, page, news);
  }, [page]);

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
        {outOfNews ? (
          <div className="news-article">
            <div className="list-group-each-news">
              <h2>No more news available.</h2>
            </div>
          </div>
        ) : null}
      </div>
      <button id="load-more" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default NewsList;
