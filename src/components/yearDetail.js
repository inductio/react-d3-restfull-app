import React, {Component} from 'react';
import {BarChart} from "react-d3-components";

class YearDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            dataCharts: []
        };
    }

    componentWillReceiveProps() {
        let chartsArr = [];

        const data = this.props.data;

        if (data) {
            this.setState({
                data
            });

            for (let curr in data) {
                chartsArr.push({
                    x: `${curr}`,
                    y: data[curr]
                });
            }

            const dataCharts = [{
                label: 'Currencies Statistics',
                values: chartsArr
            }];

            this.setState({
                dataCharts
            });
        }
    }

    render() {
        return (
            <div className="col-md-8">
                <div>
                    {this.state.data
                        ? <BarChart
                        data={this.state.dataCharts}
                        width={1200}
                        height={1000}
                        margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default YearDetail;