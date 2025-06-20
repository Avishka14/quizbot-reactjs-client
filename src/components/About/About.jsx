import React from "react";
import "./AboutStyle.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import Header from "../Header/Header";


function About() {
  return (
    <div>
        <Header/>
        <section className="blog-about-section">
      <div className="blog-container">
        <h2 className="blog-section-title">About QuizBot</h2>

        <div className="blog-about-grid">
          {/* Personal Info */}
          <div className="blog-card blog-personal-info">
            <h3 className="blog-subtitle"><CodeIcon /> Developer Info</h3>
            <p><strong>Name:</strong> Avishka Chamod</p>
            <p><EmailIcon fontSize="small" /> <a href="mailto:your@email.com">your@email.com</a></p>
            <p><LinkedInIcon fontSize="small" /> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><GitHubIcon fontSize="small" /> <a href="https://github.com/Avishka14" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>

          {/* Tech Stack */}
          <div className="blog-card blog-tech-stack">
            <h3 className="blog-subtitle"><StorageIcon /> Tech Stack</h3>
            <ul>
              <li><strong>React.js</strong> – UI components & routing</li>
              <li><strong>Spring Boot</strong> – APIs and backend logic</li>
              <li><strong>MySQL</strong> – User/blog/quiz data persistence</li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="blog-card blog-description">
            <h3 className="blog-subtitle"><IntegrationInstructionsIcon /> How QuizBot Works</h3>
            <p>
              QuizBot leverages the <strong>DeepSeek API</strong> to generate intelligent quizzes. Users can register, write blog articles, and attempt AI-generated tests tailored to their interests and skills.
            </p>
          </div>

          {/* Contribute to GitHub */}
          <div className="blog-card blog-contribute">
            <h3 className="blog-subtitle"><VolunteerActivismIcon /> Contribute on GitHub</h3>
            <p>
              Want to improve QuizBot? Fork the repo, open issues, or submit pull requests. Help us build a smarter learning tool.
            </p>
            <a href="https://github.com/Avishka14/quizbot" target="_blank" rel="noreferrer">Go to Repository →</a>
          </div>

          {/* Documentation */}
          <div className="blog-card blog-docs">
            <h3 className="blog-subtitle"><MenuBookIcon /> Read Documentation</h3>
            <p>
              Get started with our REST API, explore endpoints, and learn how to integrate with DeepSeek for quiz generation.
            </p>
            <a href="/docs" target="_blank" rel="noreferrer">Open Docs →</a>
          </div>

          {/* Join Community */}
          <div className="blog-card blog-community">
            <h3 className="blog-subtitle"><GroupIcon /> Join Our Community</h3>
            <p>
              Connect with fellow learners and contributors. Share knowledge, ask questions, and collaborate.
            </p>
            <a href="https://discord.gg/your-community" target="_blank" rel="noreferrer">Join Discord →</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
