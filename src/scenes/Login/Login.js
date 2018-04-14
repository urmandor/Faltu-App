import React, { Component } from 'react';
import './Login.css';

import {withRouter} from 'react-router-dom';
import users from '../../datafiles/users.json';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    if(event.target.id==="usernameInput")
        this.setState({username:event.target.value});
    else
        this.setState({password:event.target.value});
  }

  handleSubmit(event){
    let loginStatus = false;
    event.preventDefault();
    for(let i=0;i<users.length;i++){
        if(users[i].username===this.state.username && users[i].password===this.state.password){
            loginStatus = true;
            break;
        }
    }

    if(loginStatus){   
        this.props.onLogin();
        this.props.history.push('/books');
    }else{
        alert('incorrect username or password');
    }

    
  }

  render() {
    return (
        <div className="col-xs-12 offset-sm-2 col-sm-8 offset-ld-3 col-ld-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input type="text" className="form-control" id="usernameInput" onChange={this.onChange} value={this.state.username} placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" className="form-control" id="passwordInput" onChange={this.onChange} value={this.state.password} placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default withRouter(Login);
