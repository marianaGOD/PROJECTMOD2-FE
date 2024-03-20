import React from "react";
import backgroundGif from "../assets/bggif.gif";
import GuessTheQuoteGame from "../components/GuessTheQuoteGame";
import FunFactGenerator from "../components/FunFactGenerator";
import OscarTrueOrFalse from "../components/OscarTrueOrFalse";

export default function PlayPage() {
  return (
    <div className="playpage-main">
      <img id="playpage-background" src={backgroundGif} alt="Background" />

      <div className="playpage-games-container">
        <div
          id="playpage-game"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            height: "400px",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            color: "#0b1828",
          }}
        >
          <FunFactGenerator />
        </div>
        <div
          id="playpage-game"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            height: "400px",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            color: "#0b1828",
          }}
        >
          <GuessTheQuoteGame />
        </div>
        <div
          id="playpage-game"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            width: "30%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            color: "#0b1828",
          }}
        >
          <OscarTrueOrFalse />
        </div>
      </div>
    </div>
  );
}
