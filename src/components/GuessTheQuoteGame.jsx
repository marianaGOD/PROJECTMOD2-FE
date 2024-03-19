import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GuessTheQuoteGame() {
  const [movies, setMovies] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("These aren't the movies you're looking for", error);
      });
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateQuiz = () => {
    setSelectedAnswer(""); // Reset selected answer for new question
    if (!quizStarted) setQuizStarted(true); // Indicate that the quiz has started
    if (movies.length > 2) {
      const correctMovie = movies[Math.floor(Math.random() * movies.length)];
      let options = [correctMovie.title];
      while (options.length < 3) {
        const randomMovie =
          movies[Math.floor(Math.random() * movies.length)].title;
        if (!options.includes(randomMovie)) {
          options.push(randomMovie);
        }
      }
      options = shuffleArray(options);
      setCurrentQuestion({
        quote: correctMovie.famousQuote,
        options: options,
        correctAnswer: correctMovie.title,
      });
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setTotalQuestionsAnswered((prev) => prev + 1);
    if (answer === currentQuestion.correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCorrectCount(0);
    setTotalQuestionsAnswered(0);
    setCurrentQuestion(null);
    setSelectedAnswer("");
  };

  return (
    <div>
      <h1>Guess The Quote Game</h1>
      {!quizStarted ? (
        <button onClick={generateQuiz}>Start Quiz</button>
      ) : (
        <>
          {currentQuestion && (
            <div>
              <p>Quote: "{currentQuestion.quote}"</p>
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
                        : "initial",
                  }}
                >
                  {option}
                </button>
              ))}
              {selectedAnswer && (
                <button onClick={generateQuiz}>Next Movie</button>
              )}
            </div>
          )}
          <div>
            Correct Answers: {correctCount}/{totalQuestionsAnswered}
          </div>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
}
