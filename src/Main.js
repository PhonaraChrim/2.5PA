import React, {Component, components} from "react";
import {
     Route,Routes,
     NavLink,
     HashRouter
} from "react-router-dom";
import Home from "./Home"
import Hobbies from "./Hobbies";
import WhoAmI from "./WhoAmI";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>My Webpage</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Hobbies">Hobbies</NavLink></li>
                        <li><NavLink to="/WhoAmI">WhoAmI</NavLink></li>
                     </ul>
                     <div className="content">
                        <Routes>
                            <Route path ="/" element={<Home/>}/>
                            <Route path ="/Hobbies" element={<Hobbies/>}/>
                            <Route path ="/WhoAmI" element={<WhoAmI/>}/>
                        </Routes>
                     </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;