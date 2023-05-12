import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCat from "./components/add-cat.component";
import Cat from "./components/cat.component";
import CatsList from "./components/cats-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/cats"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cats"} className="nav-link">
                Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<CatsList/>} />
            <Route path="/cats" element={<CatsList/>} />
            <Route path="/add" element={<AddCat/>} />
            <Route path="/cats/:id" element={<Cat/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
