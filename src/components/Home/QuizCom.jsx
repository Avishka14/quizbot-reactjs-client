import React, { useState } from "react";
import './HomeStyle.css';
import { getQuiz } from "../../services/authServices";
import Cookies from "js-cookie";

function QuizCom() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const [questionCount, setQuestionCount] = useState(5); 
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error , setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setWaiting(true);
    setFinished(false);
    setQuestions([]);
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);

    try {
       const res = await getQuiz(topic, difficulty, questionCount);
       setQuestions(res.data);
       setError(null);


    } catch (err) {
    console.error("Failed to fetch quiz:", err);

    if (err.response) {

      if (err.response.status === 429) {
        setError("Too many requests. Please wait a moment and try again.");
      } else if (err.response.status === 500) {
        setError("Server error: Unable to generate quiz. Please try again later.");
      } else {
        setError(`Error: ${err.response.status} - ${err.response.data?.message || 'Unknown error'}`);
      }
    } else if (err.request) {
      setError("No response from server. Please check your network.");
    } else {
      setError("An unexpected error occurred.");
    }
  
    } finally {
      setLoading(false);
      setWaiting(false);
    }
  };

  const handleAnswer = (selectedOption) => {
    const correct = questions[currentIndex].answer;
    const isCorrect = selectedOption === correct;

    if (isCorrect) setScore((prev) => prev + 1);

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const clearFields = () => {
    setTopic("");
    setDifficulty("beginner");
    setQuestionCount(5);
    setQuestions([]);
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setFinished(false);
    setLoading(false);
    setWaiting(false);
  };

  return (
    <main className="main-content">
      <section className="quiz-generator">
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="topic">Quiz Topic</label>
              <input
                type="text"
                id="topic"
                placeholder="e.g., JavaScript, History..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="difficulty">Difficulty Level</label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="questionCount">Number of Questions</label>
              <select
                id="questionCount"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="form-field">
              <button type="submit" className="generate-btn">
                <i className="fas fa-magic"></i> Generate
              </button>
              <button
                type="button"
                className="generate-btn-clear-btn"
                onClick={clearFields}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="quiz-display"> 
              <p className="intro-view-p">Enter the Topic and Generate it!</p>

       {error && (
       <div className="error-message">
        <h3>{error}</h3>
        </div>
        )}

        {loading && (
         <div className="loading-state">
         <div className="loading-spinner"></div>
         <h3>Generating Your Quiz...</h3>
         <h3>This can take some time...</h3>
         </div>
        )}

       {waiting && !loading && (
          <div className="empty-state">
          <i className="fas fa-lightbulb"></i>
          <h3>Waiting for Questions</h3>
         </div>
        )}

        {!loading && questions.length > 0 && !finished && (
          <div id="quizContent">
            <div className="quiz-header">
              <div className="quiz-meta">
                <div className="quiz-title">{topic}</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
                </div>
              </div>
              <div className="quiz-stats">
                <div className="stat-item">
                  <div className="stat-value">{currentIndex + 1}</div>
                  <div className="stat-label">Current</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{questions.length}</div>
                  <div className="stat-label">Total</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{score}</div>
                  <div className="stat-label">Score</div>
                </div>
              </div>
            </div>

            <div className="questions-container">
              <div className="question">
                <h3>{questions[currentIndex].question}</h3>
                <ul>
                  {questions[currentIndex].options.map((opt, i) => (
                    <li key={i}>
                      <button className="option-btn" onClick={() => handleAnswer(opt)}>
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {finished && (
          <div id="quizSummary" className="quiz-summary">
            <h2>Quiz Summary</h2>
            <p>You scored <strong>{score} out of {questions.length}</strong>. Great job!</p>
            <button className="generate-btn" onClick={() => { 
                setFinished(false);
                clearFields();
            } }>Try Another Quiz</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default QuizCom;
