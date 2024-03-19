import React from "react";
import backgroundGif from "../assets/bggif.gif";
import GuessTheQuoteGame from "../components/GuessTheQuoteGame";

export default function PlayPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        overflow: "hidden",
        position: "relative", // This sets the positioning context for absolutely positioned child elements.
        display: "flex", // Use flexbox to center the child content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        zIndex: 0, // Ensure this container is above the default layer
      }}
    >
      <img
        src={backgroundGif}
        alt="Background"
        style={{
          position: "absolute", // Absolute position to fill the parent
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Keep the image behind the content
        }}
      />
      {/* This div wraps the GuessTheQuoteGame component, ensuring it's on top of the background and centered */}
      <div
        style={{
          zIndex: 2, // Ensure this content is above the background image
          // Remove specific width or height if GuessTheQuoteGame has its own dimensions
        }}
      >
        <GuessTheQuoteGame />
      </div>
    </div>
  );
}
