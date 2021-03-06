import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData

    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }


  render(){
    return (
      <div className="chart">
        <Bar

          data={this.state.chartData}
          options={
          
            {
              scales: {
              xAxes: [{
                  display: true,
                 drawborder: false,
                 
                  ticks: {display: true} , 
                  
                
                  gridLines: {
                       
                     display: false,
                     drawborder: false,
                  }
              }] , 
              yAxes: [{
                  display: true,
                  labelposition: top,
                  ticks: {display: true} , 
                  
                
                  gridLines: {
                     display: false,
                     drawborder: false,
                  }
              }]
          },
            title:{
              display:this.props.displayTitle,
              // text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },

          }
       }
        />



        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;