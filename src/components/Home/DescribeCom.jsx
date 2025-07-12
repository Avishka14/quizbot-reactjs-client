import React from "react";


function DescribeCom() {
  return (
    <div className="des-wrap">
      <main className="main-content">
        <section className="quiz-generator">
          {" "}
          <form className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="topic">Describe a Topic</label>
                <input
                  type="text"
                  id="topic"
                  placeholder="e.g., Solar Technology"
                />
              </div>
              <div className="form-field">
                <button type="submit" className="generate-btn">
                  <i className="fas fa-magic"></i> Describe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="quiz-generator"></section>
      </main>
    </div>
  );
}

export default DescribeCom;
