import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ReviewScreen from "./screens/ReviewScreen";
import RequestScreen from "./screens/RequestScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CheckScreen from "./screens/CheckScreen";
import PostCheckScreen from "./screens/PostCheckScreen";
import EmailScreen from "./screens/EmailScreen";


function App() {
  return (
    <Router>
      <Route path="/review" component={ReviewScreen} />
      <Route path="/admin/check" component={CheckScreen} />
      <Route path="/admin/email/post/:id" component={EmailScreen} />
      <Route path="/admin/post/:id" component={PostCheckScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/request" component={RequestScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/home" component={HomeScreen} />
      <Route path="/" component={WelcomeScreen} exact />
    </Router>
  );
}

export default App;
