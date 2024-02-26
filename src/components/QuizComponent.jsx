import { useState } from "react";
import quizData from "../resources/resources";
import { useNavigate } from "react-router-dom";

const QuizComponent = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

  const handleNextClick = () => setCurrentQuestionIndex(prevState => prevState + 1);
  const handlePreviousClick = () => setCurrentQuestionIndex(prevState => prevState - 1);

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/result");
    }
  };

  const handleFinish = () => {
    localStorage.setItem("totalCorrectAnswers", correctAnswers);
    localStorage.setItem("totalWrongAnswers", wrongAnswers);
    localStorage.setItem("totalAttemptedQuestions", attemptedQuestions);
    navigate("/result");
  };

  const handleOptionClick = (selectedOption) => {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    } else {
      setWrongAnswers(prevWrongAnswers => prevWrongAnswers + 1);
    }
    setAttemptedQuestions(prevAttemptedQuestions => prevAttemptedQuestions + 1);
    setCurrentQuestionIndex(prev => prev + 1);

    if (isCorrect) {
      alert("Correct answer");
    } else {
      alert("Wrong answer");
    }
  };

  return (
    <div className="parent-div">
      <div className="main-container">
        <div className="question-container">
          <div className="question-number">
            {currentQuestionIndex + 1} of {quizData.length}
          </div>
          <h3>Question</h3>
          <p>{quizData[currentQuestionIndex].question}</p>
        </div>
        <div className="option-container">
          <div className="option-parent">
            {[quizData[currentQuestionIndex].optionA, quizData[currentQuestionIndex].optionB].map((option, index) => (
              <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
          <div className="option-parent">
            {[quizData[currentQuestionIndex].optionC, quizData[currentQuestionIndex].optionD].map((option, index) => (
              <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="previous" onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button className="next" onClick={handleNextClick} disabled={currentQuestionIndex === quizData.length - 1}>
            Next
          </button>
          <button className="quit" onClick={handleQuit}>
            Quit
          </button>
          <button className="finish" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
