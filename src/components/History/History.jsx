import React from "react";
import Header from "../Header/Header";
import "./HistoryStyle.css";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getQuizHistory, getUserStats } from "../../services/authServices";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    fetchHistory();
    fetchStats();
  }, []);

      const fetchHistory = async () => {
      try {
        const res = await getQuizHistory();
        setHistoryData(res.data);
        console.log("Quiz history data:", res.data);
      } catch (error) {
        console.error("Failed to load quiz history", error);
      }
    };

       const fetchStats = async () => {
      try {
        const res = await getUserStats();
        setStatsData(res.data);
        console.log("stats data:", res.data);
      } catch (error) {
        console.error("Failed to load quiz history", error);
      }
    };

  return (
    <>
      <Header />

      <div className="history-page">
        <header className="history-header">
          <div className="history-header-content">
            <h1 className="history-title">Quiz History Dashboard</h1>
            <div className="history-user-info">
              <div className="history-user-details">
                <span className="history-username">{statsData.name}</span>
              </div>
            </div>
          </div>
        </header>
        <section className="history-statistics-section">
          <div className="history-stats-grid">
            <div className="history-stats-card">
              <div className="history-card-icon">📅</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Days Registered</h3>
                <div className="history-stat-number">{statsData.daysLogged}</div>
                <div className="history-stat-label">days active</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">❓</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Questions Answered</h3>
                <div className="history-stat-number">{statsData.questionsCovered}</div>
                <div className="history-stat-label">total questions</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">📚</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Topics Covered</h3>
                <div className="history-stat-number">{statsData.topicsCovered}</div>
                <div className="history-stat-label">different topics</div>
              </div>
            </div>
          </div>
        </section>

        <section className="history-questions-section">
          <h2 className="history-title">Previous Questions</h2>

          {historyData.map((item) => {
            const options = JSON.parse(item.options); 
            const isCorrect = item.correct; 

            return (
              <div key={item.id} className="history-question-item">
                <div className="history-question-header">
                  <span>Question #{item.id}</span>
                  <span
                    className={`history-question-result ${
                      isCorrect ? "history-correct" : "history-incorrect"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>

                <p>
                  <strong>{item.question}</strong>
                </p>

                <div className="history-answer-options">
                  {options.map((opt, index) => {
                    let className = "history-option";

                    if (opt === item.correctAnswer) {
                      className += " history-correct-option";
                    }

                    if (opt === item.userAnswer && !isCorrect) {
                      className += " history-incorrect-option";
                    }

                    if (opt === item.userAnswer) {
                      className += " history-selected";
                    }

                    return (
                      <div key={index} className={className}>
                        <span>{opt}</span>
                        {opt === item.correctAnswer && <span>✔</span>}
                        {opt === item.userAnswer &&
                          opt !== item.correctAnswer && <span>✖</span>}
                      </div>
                    );
                  })}
                </div>

                <p>
                  Result:{" "}
                  <strong style={{ color: isCorrect ? "green" : "red" }}>
                    {isCorrect
                      ? "You answered correctly"
                      : "Your answer was wrong"}
                  </strong>
                </p>
              </div>
            );
          })}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default History;
