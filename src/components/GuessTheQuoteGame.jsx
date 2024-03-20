import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GuessTheQuoteGame() {
  const [movies, setMovies] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false); 

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies`)
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
    <div>
      <h1>Guess The Movie Quote!</h1>
      {!quizStarted ? (
        <button onClick={generateQuizQuestion}>Start Quiz</button>
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
                          ? "green"
                          : "red"
                        : "lightgrey",
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
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
}
