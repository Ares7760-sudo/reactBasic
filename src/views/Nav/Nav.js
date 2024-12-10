import React from 'react';
import "./Nav.scss";
import {
  NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render () {
        return(
          <div className="topnav">
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/game">Tic-tac-toe Game</NavLink>
            <NavLink activeClassName="active" to="/job-list">Job List</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </div>
        )
    }
}

export default Nav;