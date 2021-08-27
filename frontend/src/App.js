import React from "react";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import About from "./Screens/About";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import Jcode from "./Screens/Jcode";
import { BackTop } from "antd";
import Login from "./Screens/Login";
import AdminProject from "./Screens/AdminProject";
import AdminProjectNew from "./Screens/AdminProjectNew";
import AdminProjectEdit from "./Screens/AdminProjectEdit";
import AdminContact from "./Screens/AdminContact";
import AdminJCode from "./Screens/AdminJCode";
import AdminJCodeNew from "./Screens/AdminJCodeNew";
import AdminJCodeEdit from "./Screens/AdminJCodeEdit";
import Settings from "./Screens/Settings";
import AdminAbout from "./Screens/AdminAbout";
import JcodeItem from "./Screens/JcodeItem";

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/about' component={About} />
      <Route path='/project' exact component={Project} />
      <Route path='/contact' component={Contact} />
      <Route path='/jCode' exact component={Jcode} />
      <Route path='/jCode/:id' component={JcodeItem} />
      <Route path='/login' component={Login} />
      {/* Admin Section | Admin/about */}
      <Route path='/admin' exact component={AdminAbout} />
      {/* Admin/projects */}
      <Route path='/admin/projects' exact component={AdminProject} />
      <Route path='/admin/projects/new' exact component={AdminProjectNew} />
      <Route path='/admin/projects/:id/edit' exact component={AdminProjectEdit} />
      {/* Admin/contacts */}
      <Route path='/admin/contacts' exact component={AdminContact} />
      {/* Admin/jcodes */}
      <Route path='/admin/jcodes' exact component={AdminJCode} />
      <Route path='/admin/jcodes/new' exact component={AdminJCodeNew} />
      <Route path='/admin/jcodes/:id/edit' exact component={AdminJCodeEdit} />
      {/* Settings */}
      <Route path='/admin/settings' exact component={Settings} />
      <BackTop />
    </Router>
  );
}

export default App;
