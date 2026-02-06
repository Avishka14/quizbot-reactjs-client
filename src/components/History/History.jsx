import React from "react";
import Header from "../Header/Header";
import './HistoryStyle.css';
import Footer from "../Footer/Footer";
function History() {
  return (
    <>
      <Header />

      <div className="history-page" >
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
        <section className="history-statistics-section">
          <div className="history-stats-grid">

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

 
        </section>

        
            
      </div>
     
       <Footer/>  
    </>
  );
}

export default History;
