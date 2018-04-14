import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        this.setState({ searchTerm: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="text" placeholder={this.props.placeholder} id="searchBar" value={this.state.searchTerm} onChange={this.onSearch} />
            </div>
        );
    }
}

export default Search;