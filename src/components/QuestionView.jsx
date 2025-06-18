import React, { useState } from "react";
import "./Style.css";
import Header from "./Header/Header";

function QuestionView() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const levels = ["Beginner", "Intermediate", "Expert"];

  return (
    <div className="questionview-container">
      <Header />

      <div className="questionSection-wrapper">
        <div className="questionSection-body">
          <h1>🎯 Take the Quiz</h1>

          <h2>Generate custom quizzes on any topic with AI assistance</h2>

          <div className="questionSection-input-group">
            <label htmlFor="input"> Generate Quiz for </label>
            <input type="text" placeholder="ex : JavaScript , React" />
          </div>

          <div className="questionSection-levels">
            {levels.map((level) => (
              <div
                key={level}
                className={`questionSection-level ${
                  selectedLevel === level ? "selected" : ""
                }`}
                onClick={() => setSelectedLevel(level)}
              >
                <h2>{level}</h2>
              </div>
            ))}
          </div>

          <button className="questionSection-generate-btn">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionView;
