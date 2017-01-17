import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YearsList from  './components/yearsList';
import YearDetail from  './components/yearDetail';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: 2017,
            data: null
        };
        this.getNewData = this.getNewData.bind(this);
    }

    componentDidMount() {
        this.getNewData(2017);
    }

    getNewData(selectedYear) {
        this.setState({selectedYear});
        axios.get(`http://api.fixer.io/${selectedYear}-01-01`)
            .then((response) => {
                this.setState({data: response.data.rates});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <YearDetail
                    data={this.state.data} selectedYear={this.state.selectedYear}
                />
                <YearsList
                    onYearSelect={selectedYear => this.getNewData(selectedYear)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);