import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class NewBookButton extends Component {
    constructor(props){
        super(props);
        this.onAddBookClicked = this.onAddBookClicked.bind(this);
    }

    onAddBookClicked() {
        this.props.history.push('/addBook');
    }

    render(){
        return (
            <button className="btn btn-primary" onClick={this.onAddBookClicked}>Add Book</button>
        )
            
    }
}

export default withRouter(NewBookButton);