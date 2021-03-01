import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/login.js';
import ProblemsStorePage from './pages/problemsStore';
import UserProfilePage from "./pages/userProfile";
import WelcomePage from "./pages/welcome"
import AdminPage from "./pages/admin";
import RequestControlPanel from "./pages/requestControlPanel";
import OrderingPage from "./pages/ordering";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import LeaderBoardPage from "./pages/leaderBoard";
import RegistrationPage from "./pages/registration";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SettingsPage from "./pages/settings";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>

          <Router>
              <div>
                  <Route exact path="/">
                      <WelcomePage />
                  </Route>
                  <Route path="/myProfile">
                      <UserProfilePage />
                  </Route>
                  <Route path="/makeRequest">
                      <OrderingPage />
                  </Route>
                  <Route path="/request">
                      <RequestControlPanel />
                  </Route>
                  <Route path="/login">
                      <LoginPage />
                  </Route>
                  <Route path="/registration">
                      <RegistrationPage />
                  </Route>
                  <Route path="/reportWebVitals">
                      <reportWebVitals />
                  </Route>
                  <Route path="/archive">
                      <ProblemsStorePage />
                  </Route>
                  <Route path="/settings">
                      <SettingsPage />
                  </Route>


              </div>
          </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
