import React from "react";
//adding pages
import Home from "./pages/public/home";
import Login from "./pages/public/login";

//adding css
import "./css/home.css"
import "./css/main.css"
import "./css/login.css"

import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      //adding more routes here
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}