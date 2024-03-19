import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Carrousel({ movies }) {
  const [featuredMovies, setFeaturedMovies] = useState([movies]);
  const nav = useNavigate();

  useEffect(() => {
    const pictureNumber = Math.floor(Math.random() * movies.length);
    setFeaturedMovies(movies.slice(pictureNumber, pictureNumber + 25));
  }, [movies]);

  return (
    <>
      {featuredMovies.length < 3 ? (
        ""
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false, //slide shadows
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {featuredMovies.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                onClick={() => nav(`/movies/${movie.id}`)}
              >
                <img src={movie.imageUrl} alt="" />
                <h2>{movie.title}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
