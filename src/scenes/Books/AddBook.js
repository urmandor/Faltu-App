import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import books from '../../datafiles/books';

class AddBook extends Component {
    constructor(props){
        super(props);

        this.index = props.match.params.id;

        this.state = {
            title: this.index ? books[this.index-1].title : '',
            author: this.index ? books[this.index-1].author : ''
        };

        this.onChange = this.onChange.bind(this);
        this.onBookSave = this.onBookSave.bind(this);
    }

    onChange(event){
        switch(event.target.id){
            case "bookTitleInput":
                this.setState({title: event.target.value});
                break;
            case "bookAuthorInput":
                this.setState({author: event.target.value});
                break;
            default:
            //Do nothing...
        }
    }

    onBookSave(event){
        event.preventDefault();
        
        if(this.index){
            books[this.index-1].title = this.state.title;
            books[this.index-1].author = this.state.author;
        }else{
            books.push({index: books.length+1, title: this.state.title, author: this.state.author});
        }
        
        this.props.history.goBack();
    }

    render(){
        return (
            <div>
                <div className="col-xs-12">
                    <h2>{this.index ? 'Edit Book' :'Add New Book'}</h2>
                </div>
                <form onSubmit={this.onBookSave}>
                    <div className="form-group">
                        <label htmlFor="bookTitleInput">Title</label>
                        <input type="text" className="form-control" id="bookTitleInput" onChange={this.onChange} value={this.state.title} placeholder="Enter Book Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookAuthorInput">Author</label>
                        <input type="text" className="form-control" id="bookAuthorInput" onChange={this.onChange} value={this.state.author} placeholder="Enter Book Author" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(AddBook);