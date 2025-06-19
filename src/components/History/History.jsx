import React from "react";
import Header from "../Header/Header";
import './HistoryStyle.css';
function History() {
  return (
    <>
      <Header />

      <div className="history-container">
        <header className="history-header">
          <div className="history-header-content">
            <h1 className="history-title">Quiz History Dashboard</h1>
            <div className="history-user-info">
              <div className="history-user-details">
                <span className="history-username">John Doe</span>
                <span className="history-user-level">Level 15</span>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="history-navigation">
          <button className="history-nav-btn history-nav-active">
            Statistics
          </button>
          <button className="history-nav-btn">Question History</button>
          <button className="history-nav-btn">Performance</button>
          <button className="history-nav-btn">Topics</button>
        </nav>

        {/* Statistics Section */}
        <section className="history-statistics-section">
          <div className="history-stats-grid">
            <div className="history-stats-card history-rating-card">
              <div className="history-card-header">
                <h3 className="history-card-title">Account Rating</h3>
                <div className="history-rating-badge">A+</div>
              </div>
              <div className="history-rating-progress">
                <div className="history-progress-bar">
                  <div className="history-progress-fill w-85"></div>
                </div>
                <span className="history-progress-text">85% to S Rank</span>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">📅</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Days Registered</h3>
                <div className="history-stat-number">247</div>
                <div className="history-stat-label">days active</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">❓</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Questions Answered</h3>
                <div className="history-stat-number">1,234</div>
                <div className="history-stat-label">total questions</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">📚</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Topics Covered</h3>
                <div className="history-stat-number">42</div>
                <div className="history-stat-label">different topics</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">🎯</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Accuracy Rate</h3>
                <div className="history-stat-number">89%</div>
                <div className="history-stat-label">correct answers</div>
              </div>
            </div>

            <div className="history-stats-card">
              <div className="history-card-icon">🔥</div>
              <div className="history-card-content">
                <h3 className="history-card-title">Current Streak</h3>
                <div className="history-stat-number">12</div>
                <div className="history-stat-label">days in a row</div>
              </div>
            </div>
          </div>

          <div className="history-performance-chart">
            <h3 className="history-section-title">Weekly Performance</h3>
            <div className="history-chart-placeholder">
              <div className="history-chart-bars">
                {[60, 80, 45, 90, 70, 55, 85].map((height, idx) => (
                  <div
                    className="history-bar"
                    style={{ height: `${height}%` }}
                    key={idx}
                  >
                    <span className="history-bar-label">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="history-footer">
          <div className="history-footer-content">
            <div className="history-footer-stats">
              <span>Total Time Spent: 156 hours</span>
              <span>Questions per Day: 12.5 avg</span>
              <span>Favorite Topic: Mathematics</span>
            </div>


            <div className="history-questions-list">

              <div className="history-question-item">
                <div className="history-question-header">
                  <div className="history-question-meta">
                    <span className="history-question-topic">Mathematics</span>
                    <span className="history-question-date">2024-06-18</span>
                    <span className="history-question-time">14:30</span>
                  </div>
                  <div className="history-question-result history-correct">
                    ✓ Correct
                  </div>
                </div>
                <div className="history-question-content">
                  <h4 className="history-question-text">
                    What is the square root of 144?
                  </h4>
                  <div className="history-answer-options">
                    <div className="history-option history-selected history-correct-option">
                      <span className="history-option-label">A</span>
                      <span className="history-option-text">12</span>
                      <span className="history-option-status">
                        Your Answer ✓
                      </span>
                    </div>
                    <div className="history-option">
                      <span className="history-option-label">B</span>
                      <span className="history-option-text">10</span>
                    </div>
                    <div className="history-option">
                      <span className="history-option-label">C</span>
                      <span className="history-option-text">14</span>
                    </div>
                    <div className="history-option">
                      <span className="history-option-label">D</span>
                      <span className="history-option-text">16</span>
                    </div>
                  </div>
                  <div className="history-question-explanation">
                    <strong>Explanation:</strong> The square root of 144 is 12
                    because 12 × 12 = 144.
                  </div>
                </div>
              </div>


              <div className="history-question-item">
                <div className="history-question-header">
                  <div className="history-question-meta">
                    <span className="history-question-topic">Science</span>
                    <span className="history-question-date">2024-06-18</span>
                    <span className="history-question-time">14:25</span>
                  </div>
                  <div className="history-question-result history-incorrect">
                    ✗ Incorrect
                  </div>
                </div>
                <div className="history-question-content">
                  <h4 className="history-question-text">
                    What is the chemical symbol for gold?
                  </h4>
                  <div className="history-answer-options">
                    <div className="history-option history-correct-option">
                      <span className="history-option-label">A</span>
                      <span className="history-option-text">Au</span>
                      <span className="history-option-status">
                        Correct Answer ✓
                      </span>
                    </div>
                    <div className="history-option">
                      <span className="history-option-label">B</span>
                      <span className="history-option-text">Ag</span>
                    </div>
                    <div className="history-option history-selected history-incorrect-option">
                      <span className="history-option-label">C</span>
                      <span className="history-option-text">Go</span>
                      <span className="history-option-status">
                        Your Answer ✗
                      </span>
                    </div>
                    <div className="history-option">
                      <span className="history-option-label">D</span>
                      <span className="history-option-text">Gd</span>
                    </div>
                  </div>
                  <div className="history-question-explanation">
                    <strong>Explanation:</strong> The chemical symbol for gold
                    is Au, derived from the Latin word "aurum".
                  </div>
                </div>
              </div>
            </div>

            <div className="history-btn-primary">
              <button className="history-button">
                Start New Quiz
              </button>
              <button className="history-button">
                Export Data
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default History;
