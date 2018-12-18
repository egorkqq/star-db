import React from "react";
import "./styles.sass";
import icon from "./image.png";
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error" width="10%" />
      <span className="boom">BOOM!</span>
      <span>somthing went wrong</span>
      <span>(but we will fix it soon)</span>
    </div>
  );
};

export default ErrorIndicator;
