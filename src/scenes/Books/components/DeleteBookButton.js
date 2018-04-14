import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import books from '../../../datafiles/books';

class DeleteBookButton extends Component {
    constructor(props){
        super(props);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    onDeleteClicked() {
        if(this.props.index>-1){
            books.splice(this.props.index, 1);
            for(let i=this.props.index;i<books.length;i++){
                books[i].index = i+1;
            }
        }
            
        this.props.history.goBack();
    }

    render(){
        return (
            <button className="btn btn-danger" onClick={this.onDeleteClicked}>Delete Book</button>
        )
            
    }
}

export default withRouter(DeleteBookButton);