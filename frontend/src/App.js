import React from "react";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Project from "./screens/Project";
import Contact from "./screens/Contact";
import Jcode from "./screens/Jcode";
import { BackTop } from "antd";
import Login from "./screens/Login";
import AdminProject from "./screens/AdminProject";
import AdminProjectNew from "./screens/AdminProjectNew";
import AdminProjectEdit from "./screens/AdminProjectEdit";
import AdminContact from "./screens/AdminContact";
import AdminJCode from "./screens/AdminJCode";
import AdminJCodeNew from "./screens/AdminJCodeNew";
import AdminJCodeEdit from "./screens/AdminJCodeEdit";
import Settings from "./screens/Settings";
import AdminAbout from "./screens/AdminAbout";

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/about' component={About} />
      <Route path='/project' exact component={Project} />
      <Route path='/contact' component={Contact} />
      <Route path='/jCode' component={Jcode} />
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
