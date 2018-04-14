import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import books from '../../../datafiles/books';


class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {search: props.search, books: books};
    }

    componentWillReceiveProps(nextProps) {        
        this.setState({search: nextProps.search, books: this.filterBooks(nextProps.search.toLowerCase())});
    }

    filterBooks(search){
        return books.filter(book=>{
            return (
                //Search using index
                book.index.toString().indexOf(search) !== -1 
                //Search using title
                || book.title.toLowerCase().indexOf(search) !== -1
                //Search using author
                || book.author.toLowerCase().indexOf(search) !== -1)
        });
    }

    render(){
        return (
            <div className="col-xs-12">
                <ul>
                {this.state.books.map((book)=>
                   <li key={book.index}>
                        <NavLink to={`/book/${book.index}`}>{book.title} by {book.author}</NavLink>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default BookList;