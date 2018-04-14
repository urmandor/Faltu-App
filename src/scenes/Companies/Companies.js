import React, {Component} from 'react';
import companies from '../../datafiles/companies';
import ImportCompanies from './Components/ImportCompanies';
import ExportCompanies from './Components/ExportCompanies';

class Companies extends Component {
    constructor(props){
        super(props);
        this.onFileLoaded = this.onFileLoaded.bind(this);
        this.state = {
            companies: companies
        }
    }

    onFileLoaded(file) {
        console.log(file);
        this.setState({companies: file});
    }

    render(){
        return (
            <div>
            <div className="row">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                        {
                            this.state.companies.map((company,index)=>(
                                <tr key={index}>
                                    <td>{company.name}</td>
                                    <td>{company.phone}</td>
                                    <td>{company.address}</td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                </div>
                <div className="row">
                    <ImportCompanies onFileLoaded={this.onFileLoaded}/>
                    <ExportCompanies file={this.state.companies} />
                </div>    
            </div>
        )
    }
}

export default Companies;