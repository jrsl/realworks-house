import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import NavBar from "./components/layout/NavBar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="container">
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/staff" exact={true} component={Staff} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
