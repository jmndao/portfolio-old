import React from "react";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppMenu from "./components/AppMenu";
import HomeScreen from "./Screens/HomeScreen";
import About from "./Screens/About";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import { BackTop } from "antd";

function App() {
  return (
    <Router>
      <AppMenu />
      <Route path='/' exact component={HomeScreen} />
      <Route path='/about' component={About} />
      <Route path='/project' component={Project} />
      <Route path='/contact' component={Contact} />
      <BackTop />
    </Router>
  );
}

export default App;
