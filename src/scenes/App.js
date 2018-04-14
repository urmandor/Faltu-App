import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import Books from './Books/Books';
import Book from './Books/Book';
import AddBook from './Books/AddBook';
import Companies from './Companies/Companies';
import Navbar from './Components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.onLoginChange = this.onLoginChange.bind(this);

  }

  onLoginChange() {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  }

  render() {
    return (
      <div>
        <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.onLoginChange} />
        <div className="container marginal">
          <Route path="/login" exact render={() => (<Login onLogin={this.onLoginChange} />)} />
          <Route path="/books" exact component={Books} />
          <Route path="/book/:id" exact render={() => (this.state.isLoggedIn ? <Book /> : <Redirect to="/login" />)} />
          <Route path="/addBook" exact render={() => (this.state.isLoggedIn ? <AddBook /> : <Redirect to="/login" />)} />
          <Route path="/addBook/:id" exact render={() => (this.state.isLoggedIn ? <AddBook /> : <Redirect to="/login" />)} />
          <Route path="/companies" exact render={() => (this.state.isLoggedIn ? <Companies /> : <Redirect to="/login" />)} />
        </div>
      </div>
    );
  }
}

export default App;
