import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class BackButton extends Component {
    constructor(props){
        super(props);
        this.onBackClicked = this.onBackClicked.bind(this);
    }

    onBackClicked() {
        this.props.history.goBack();
    }

    render(){
        return (
            <button className="btn btn-success horizontal-margin" onClick={this.onBackClicked}>Back</button>
        )
            
    }
}

export default withRouter(BackButton);