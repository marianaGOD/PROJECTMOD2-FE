import React from "react";
import quoteImg from "../assets/guess-the-quote.jpg";
import funFactImg from "../assets/funfactgenerator.jpg";

export default function () {
  return (
    <div className="play-main-screen">
      <div>
        Guess the Quote!
        <img src={quoteImg} alt="guess the quote" />
      </div>

      <div>
        Fun Fact Generator
        <img src={funFactImg} alt="fun fact generator" />
      </div>
    </div>
  );
}
