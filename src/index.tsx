import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css';
import './style/style.css';
import './style/fonts/Ghost Clan/stylesheet.css';
import './style/fonts/Borda/stylesheet.css';
// import MainMenu from './pages/MainMenu/MainMenu';
import { PressToStart } from './pages/PressToStart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PressToStart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
