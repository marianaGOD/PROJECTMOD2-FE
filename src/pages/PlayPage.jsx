import React from "react";
import backgroundGif from "../assets/bggif.gif";
import GuessTheQuoteGame from "../components/GuessTheQuoteGame";
import FunFactGenerator from "../components/FunFactGenerator";
import OscarTrueOrFalse from "../components/OscarTrueOrFalse";

export default function PlayPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 0,
      }}
    >
      <img
        src={backgroundGif}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          padding: "20px",
          marginTop: "-60px",
        }}
      >
        <div
          className="carrousel-wrapper"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            height: "300px",
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
          className="carrousel-wrapper"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            height: "300px",
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
          className="carrousel-wrapper"
          style={{
            background: "#efe4c5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "10px",
            width: "30%",
            height: "300px",
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
