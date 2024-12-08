import React from 'react';
import "./Nav.scss"

class Nav extends React.Component {
    render () {
        return(
          <ul className="topnav">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/game">Tic-tac-toe Game</a></li>
            <li><a href="/job-list">Job List</a></li>
            <li className="right"><a href="/about">About</a></li>
          </ul>
        )
    }
}

export default Nav;