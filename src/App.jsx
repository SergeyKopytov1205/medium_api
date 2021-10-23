import React from "react";
import { HashRouter } from "react-router-dom";
import { CurrentUserProvider } from "./context/currentUser.js";

import style from './App.module.css'

import CurrentUserChecker from './components/CurrentUserChecker.jsx'
import NavBar from "./components/NavBar.jsx";
import Routes from './routes.js'
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className={style.container}>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <HashRouter >
            <NavBar />
            <Routes />
            <Footer />
          </HashRouter>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div >
  );
}

export default App;
