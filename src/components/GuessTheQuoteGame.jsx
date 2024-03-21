import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GuessTheQuoteGame() {
  const [movies, setMovies] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false); 

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  useEffect(() => {
    axios
      .get(`${API_URL}/movies`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log("There's no movies for you!"));
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  function generateQuizQuestion() {
    setSelectedAnswer("");
    setQuizStarted(true); 

    let randomNumber = Math.floor(Math.random() * movies.length);
    let correctAnswer = movies[randomNumber];

    let options = [correctAnswer.title];
    while (options.length < 3) {
      let randomNumberForWrongOptions = Math.floor(
        Math.random() * movies.length
      );
      let wrongOption = movies[randomNumberForWrongOptions].title;
      if (
        !options.includes(wrongOption) &&
        wrongOption !== correctAnswer.title
      ) {
        options.push(wrongOption);
      }
    }

    shuffleArray(options);

    setCurrentQuestion({
      quote: correctAnswer.famousQuote,
      options: options,
      correctAnswer: correctAnswer.title,
    });
  }

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
    setTotalQuestionsAnswered((prevCount) => prevCount + 1);
    if (answer === currentQuestion.correctAnswer) {
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    }
  }

  function restartQuiz() {
    setQuizStarted(false);
    setCorrectAnswerCount(0);
    setTotalQuestionsAnswered(0);
    setCurrentQuestion(null);
    setSelectedAnswer("");
  }

  return (
    <div className="playpage-game-card">
      <h1>Guess The Movie Quote!</h1>
      {!quizStarted ? (
        <button className="playpage-buttons" onClick={generateQuizQuestion}>
          Start Game
        </button>
      ) : (
        <>
          {currentQuestion && (
            <div>
              <p>Quote: "{currentQuestion.quote}"</p>{" "}
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== ""}
                  style={{
                    backgroundColor:
                      selectedAnswer === option
                        ? option === currentQuestion.correctAnswer
                          ? "#A9FAA4" 
                          : "#FAAEA4" 
                        : option === currentQuestion.correctAnswer &&
                          selectedAnswer
                        ? "#A9FAA4" 
                        : "black", 
                    color: selectedAnswer ? "black" : "white", 
                    margin: "10px", 
                    padding: "10px", 
                    borderRadius: "5px",
                  }}
                >
                  {option}
                </button>
              ))}
              {selectedAnswer && (
                <button onClick={generateQuizQuestion}>Next Movie</button>
              )}
            </div>
          )}
          <div>
            Score: {correctAnswerCount}/{totalQuestionsAnswered}{" "}
          </div>
          <button className="playpage-buttons" onClick={restartQuiz}>
            Restart Game
          </button>
        </>
      )}
    </div>
  );
}
