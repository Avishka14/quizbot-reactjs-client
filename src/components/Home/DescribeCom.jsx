import React, { useState } from "react";
import { getDescribe } from "../../services/authServices"; 
import Cookies from "js-cookie";

function DescribeCom() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const userId = Cookies.get("userid");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDescription("");

    try {
      const response = await getDescribe(topic, userId);
      setDescription(response.data[0]?.description || "No description available.");
    } catch (error) {
      console.error("API call error:", error);
      setError("Failed to fetch description. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearFields = () => {
    setTopic("");
    setDescription("");
    setError(null);
    setLoading(false);
  };

  // Show intro text only if no description, no error, and not loading
  const showIntroText = !description && !error && !loading;

  return (
    <div className="des-wrap">
      <main className="main-content">
        <section className="quiz-generator">
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="topic">Describe a Topic</label>
                <input
                  type="text"
                  id="topic"
                  placeholder="e.g., Solar Technology"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <button type="submit" className="generate-btn">
                  <i className="fas fa-magic"></i> Describe
                </button>
                <button
                  type="button"
                  className="generate-btn-clear-btn"
                  onClick={clearFields}
                  disabled={loading}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="quiz-generator">
          {showIntroText && (
            <p className="intro-view-p">Enter the Topic you want to Elaborate!</p>
          )}

          {loading && (
           <div className="loading-state">
            <div className="loading-spinner"></div>
            <h3>Generating Your Description...</h3>
          </div>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {description && (
            <div className="description-output">
              <h3>Description:</h3>
              <p>{description}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default DescribeCom;
