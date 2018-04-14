import React, {Component} from 'react';
import books from '../../datafiles/books';
import {withRouter} from 'react-router-dom';
import DeleteBookButton from '../Books/components/DeleteBookButton';
import BackButton from '../Components/BackButton';

class Book extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            onEdit: false
        };

        this.index = props.match.params.id-1;
        this.book = books[this.index];
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit() {
        this.props.history.push(`/addBook/${this.index+1}`);
    }

    render() {
        return (
            <div className="row">
                <div className="text-center full-width">
                    <h1>{this.book.title}</h1>
                    <h6>by</h6>
                    <h4>{this.book.author}</h4>
                    <BackButton className="horizontal-margin" />
                    <button className="btn btn-primary horizontal-margin" onClick={this.onEdit}>Edit </button>
                    <DeleteBookButton index={this.index} />
                </div>
            </div>
        );
    }
}

export default withRouter(Book);