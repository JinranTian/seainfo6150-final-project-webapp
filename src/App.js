import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './assets/style.css';
import Error from "./domain/error/Error";
import Homepage from "./domain/root/Homepage";
import QuizMain from "./domain/quiz/QuizMain";
import Footer from "./domain/root/Footer";
import TestScore from "./domain/quiz/TestScore";
import QuizStart from "./domain/quiz/QuizStart";
import IqTestIndex from "./domain/iq/IqTestIndex";
import IqTest from "./domain/iq/IqTest";
import IqScore from "./domain/iq/IqScore";
import GamesIndex from "./domain/games/GamesIndex";
import Contact from "./domain/contact/Contact";

function App() {
  return (
    <>
      <header>
        <nav>

          <ul>
              <li>
                  <Link to={"/"}>
                      <h4 className={"text-white"} style={{
                          padding: 0,
                          margin: 0
                      }}>Quizzer</h4>
                  </Link>
              </li>
              <li>
                  <Link to="/quiz/start">Quiz</Link>
              </li>
              <li>
                  <Link to={"/iq"}>IQ</Link>
              </li>
              <li>
                  <Link to={"/games"}>Games</Link>
              </li>
              <li>
                  <Link to={"/contactus"}>Contact Us</Link>
              </li>
          </ul>
        </nav>
      </header>
        <div className={"root"}>
            <Switch>
                <Route path={"/"} exact component={() => <Homepage appVersion={"1.0.0b"} />} />
                <Route path={"/quiz/main"} component={QuizMain} />
                <Route path={"/quiz/score"} component={TestScore} />
                <Route path={"/quiz/start"} component={QuizStart} />

                <Route path={"/iq"} exact component={IqTestIndex} />
                <Route path={"/iq/main"} exact component={IqTest} />
                <Route path={"/iq/score"} component={IqScore} />

                <Route path={"/games"} exact component={GamesIndex} />

                <Route path={"/contactus"} exact component={Contact} />
                <Route component={Error} />
            </Switch>
        </div>

        <Footer />
    </>
  );
}

export default App;
