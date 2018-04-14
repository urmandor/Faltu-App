import React, {Component} from 'react';

class ExportCompanies extends Component {
    constructor(props){
        super(props);
        this.state = {encodedUri: ''};
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        console.log(this.props.file);
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += this.convertJsonToCsv(this.props.file);
        let encodedUri = encodeURI(csvContent);
        this.setState({encodedUri: encodedUri}, ()=>{
            this.refs.downloadFile.click();
        });
    }
    
    convertJsonToCsv(json){
        let csv = '';
        for(let i=0;i<json.length;i++){
            let row = `${json[i].name},${json[i].phone},${json[i].address}`;
            row += i===json.length-1 ? '' : '\r\n';
            csv += row;
        }
        return csv;
    }

    render(){
        return (
            <div>
                <a href={this.state.encodedUri} download="data.csv" ref="downloadFile" style={{display: "none"}}>Download Link</a>
                <button className="btn btn-success horizontal-margin" onClick={this.onClick}>Export</button>
            </div>
        )
    }
}

export default ExportCompanies;