import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const activeStyle = {
            fontWeight: 'bold'
        }
        return (
            <nav>
                <NavLink className="NavLink" exact to="/" activeStyle={activeStyle}>Home</NavLink>
                <NavLink exact to="/Taco" activeStyle={activeStyle}>Taco</NavLink>
                <NavLink exact to="/Burrito" activeStyle={activeStyle}>Burrito</NavLink>
                <NavLink exact to="/OldFish" activeStyle={activeStyle}>Old Fish</NavLink>
            </nav>
        )
    }
}

export default NavBar;