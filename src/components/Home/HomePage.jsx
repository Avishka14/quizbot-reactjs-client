import React from "react";
import './HomeStyle.css';
import Header from "../Header/Header";

function HomePage() {
  return (
    <>
    <Header/>
   <div className="quiz-home">
   
      <header className="header">
        <h1><i className="fas fa-brain"></i> AI Quiz Master</h1>
        <p>Challenge your knowledge with AI-generated quizzes</p>
      </header>


      <main className="main-content">

        <section className="quiz-generator">
          <form className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="topic">Quiz Topic</label>
                <input type="text" id="topic" placeholder="e.g., JavaScript, History..." />
              </div>
              <div className="form-field">
                <label htmlFor="difficulty">Difficulty Level</label>
                <select id="difficulty">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="form-field">
                <button type="submit" className="generate-btn">
                  <i className="fas fa-magic"></i> Generate
                </button>
              </div>
            </div>


            <section className="advanced-options">
              <h3><i className="fas fa-cog"></i> Advanced Options</h3>
              <div className="options-grid">
                <div className="form-field">
                  <label htmlFor="questionCount">Number of Questions</label>
                  <select id="questionCount" defaultValue="10">
                    <option value="5">5 Questions</option>
                    <option value="10">10 Questions</option>
                    <option value="15">15 Questions</option>
                    <option value="20">20 Questions</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="timeLimit">Time Limit</label>
                  <select id="timeLimit" defaultValue="60">
                    <option value="no-limit">No Limit</option>
                    <option value="30">30 sec/question</option>
                    <option value="60">1 min/question</option>
                    <option value="120">2 min/question</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="questionType">Question Type</label>
                  <select id="questionType" defaultValue="mixed">
                    <option value="mixed">Mixed</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="fill-blank">Fill in the Blank</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="category">Category</label>
                  <select id="category" defaultValue="general">
                    <option value="general">General</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="literature">Literature</option>
                    <option value="mathematics">Mathematics</option>
                  </select>
                </div>
              </div>
            </section>
          </form>
        </section>


        <section className="quiz-display">

          <div className="empty-state">
            <i className="fas fa-lightbulb"></i>
            <h3>Ready to Test Your Knowledge?</h3>
            <p>Enter a topic and difficulty level above to generate your personalized AI quiz!</p>
          </div>


          <div className="loading-state" hidden>
            <div className="loading-spinner"></div>
            <h3>Generating Your Quiz...</h3>
            <p>AI is crafting personalized questions just for you</p>
          </div>

    
          <div id="quizContent" hidden>
            <div className="quiz-header">
              <div className="quiz-meta">
                <div className="quiz-title">JavaScript Fundamentals</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="quiz-stats">
                <div className="stat-item">
                  <div className="stat-value">1</div>
                  <div className="stat-label">Current</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">10</div>
                  <div className="stat-label">Total</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Score</div>
                </div>
                <div className="timer" hidden>
                  <i className="fas fa-clock"></i> <span className="time-left">60</span>s
                </div>
              </div>
            </div>

  
            <div className="questions-container">
              <div className="question">...</div>
            </div>
          </div>

 
          <div id="quizSummary" className="quiz-summary" hidden>
            <h2>Quiz Summary</h2>
            <p>You scored <strong>8 out of 10</strong>. Great job!</p>
            <button className="generate-btn">Try Another Quiz</button>
          </div>
        </section>
      </main>
    </div>
      
    </>
  );
}

export default HomePage;
