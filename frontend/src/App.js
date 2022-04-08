import React from "react";
//adding pages
import Home from "./pages/public/home";
import Login from "./pages/public/login";
import Activity from "./pages/private/activities-form";
import Dashboard from "./pages/private/dashboard";
import Profile from "./pages/private/profile";

//adding css respective to the pages
import "./css/home.css"
import "./css/main.css"
import "./css/login.css"
import "./css/activities-form.css"
import "./css/dashboard.css"
import "./css/profile.css"

import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      //adding routes to pages here...
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/activitiesform" exact element={<Activity />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}