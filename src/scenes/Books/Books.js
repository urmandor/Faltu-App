import React, { Component } from 'react';
import Search from '../Components/Search';
import NewBookButton from './components/NewBookButton';
import BookList from './components/BookList';

class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {search:''};
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(search){
    this.setState({search});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <Search onSearch={this.onSearch}/>
            </div>
            <div className="col-xs-2">
                <NewBookButton />
            </div>
        </div>
        <div className="row">
            <BookList search={this.state.search}/>
        </div>
      </div>
    );
  }
}

export default Books;
