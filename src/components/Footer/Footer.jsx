import React from 'react'
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import './FooterStyle.css';

function Footer() {
  return (
      <div className="section-four-land">
        <h2>Developed By Avishka Chamod | &copy; 2025</h2>
        <a href="mailto:avishkachamod14@gmail.com">
          <AlternateEmailRoundedIcon />
        </a>

        <a href="https://github.com/Avishka14">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/avishka-chamod-hemachandra-04641227b/">
          <LinkedInIcon />
        </a>
      </div>
  )
}

export default Footer