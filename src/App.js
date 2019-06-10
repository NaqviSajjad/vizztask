import React, { Component } from 'react';
import logo from './logo.svg';

import Chart from './components/Chart';
// import './App.css';
// import Barchart from './components/Barchart';
// import Piechart from './components/Piechart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Plane Ticket', 'Hotel', 'Rental Car', 'Dinner', 'Post Cards', ],
        
        datasets:[
          {
            label:'Barchart',
            data:[
              268,
              199,
              50,
              120,
              3,
             
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 0.6)',
              'rgba(30, 144, 255, 0.6)',
              'rgba(0, 255, 127, 0.6)',
              'rgba(255, 255, 0, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              
            ]
          }
        ]
      }
    });
  }

  render() {

  
    return (
      <div className="App">
       
        <Chart chartData={this.state.chartData}  legendPosition="bottom"/>


      </div>
    );
  }
}

export default App;