import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_fixed.jsx';

// Apply global body styles via inline style tag
const bodyStyles = {
  margin: 0,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

const codeStyles = {
  fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
};

// Apply global styles
document.body.style.margin = bodyStyles.margin;
document.body.style.fontFamily = bodyStyles.fontFamily;
document.body.style.webkitFontSmoothing = bodyStyles.WebkitFontSmoothing;
document.body.style.mozOsxFontSmoothing = bodyStyles.MozOsxFontSmoothing;

// Style all code elements
const style = document.createElement('style');
style.textContent = `
  code {
    font-family: ${codeStyles.fontFamily};
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);