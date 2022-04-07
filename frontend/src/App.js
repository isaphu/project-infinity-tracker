import React from "react";
//adding pages
import Home from "./pages/public/home";

//adding css
import "./css/home.css"

import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        //adding more routes here
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}