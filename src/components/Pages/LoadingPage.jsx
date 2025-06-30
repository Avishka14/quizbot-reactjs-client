import React from 'react'
import "./PagesStyle.css";

function LoadingPage() {
  return (
   <div className="LoadingContainer">
      <div className="LoadingSpinner">
        <div className="LoadingBounce1"></div>
        <div className="LoadingBounce2"></div>
        <div className="LoadingBounce3"></div>
      </div>
      <p className="LoadingText">Loading, please wait...</p>
    </div>
  )
}

export default LoadingPage