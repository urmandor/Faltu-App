import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {

    constructor(props){
        super(props);
        this.logoutButtonClick = this.logoutButtonClick.bind(this);
    }

    logoutButtonClick(event) {
        event.preventDefault();
        this.props.logout();
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/books" className="navbar-brand">Faltu App</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {this.props.isLoggedIn ? '': <NavLink to="/login" className="nav-item nav-link">Login</NavLink>}
                        <NavLink to="/books" className="nav-item nav-link">Books</NavLink>
                        <NavLink to="/companies" className="nav-item nav-link">Companies</NavLink>
                        {this.props.isLoggedIn ? <a href="" onClick={this.logoutButtonClick} className="nav-item nav-link">Logout</a> : ''}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;