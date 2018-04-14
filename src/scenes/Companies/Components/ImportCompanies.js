import React, {Component} from 'react';

class ImportCompanies extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onFileSelected = this.onFileSelected.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.refs.fileSelector.click();
    }

    onFileSelected(event){
        event.preventDefault();
        const reader = new FileReader();
        let that = this;
        reader.onload = function(file){
            let fileArray = file.target.result.split(/\r\n|\n/);
            let json = that.convertCsvToJson(fileArray);
            if(!json){
                return;
            }
            that.props.onFileLoaded(json);
        }
        reader.readAsText(event.target.files[0], 'UTF-8');
    }

    convertCsvToJson (csv){
        let json = [];
        for(let i=0;i<csv.length;i++){
            let row = csv[i].split(',');
            if(row.length!==3){
                alert('Csv file not compatible');
                return false;
            }
            json.push({'name':row[0], 'phone':row[1], 'address':row[2]});
        }
        return json;
    }

    render(){
        return (
            <div>
                <input type="file" id="file" onChange={this.onFileSelected} ref="fileSelector" accept=".csv"  style={{display: "none"}} />
                <button className="btn btn-primary horizontal-margin" onClick={this.onClick}>Import</button>
            </div>
        )
    }
}

export default ImportCompanies;