import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar, Line, Pie} from 'react-chartjs-2';


import './../App.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      // display: Barchart,
      chartData:props.chartData

    }
  }

static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }


// Functions which are added


   Barchart = (props) => {
  
  return (
    <div className='barchart_class'>Hello, I am the bar chart component!</div>
        )
      }

   Piechart = (props) => {
      
      return (
        <div className='piechart'>And I am the pie chart component!</div>
      )
    }
  

  changeDisplay = () => {
    let { display } = this.state;
    this.setState({ display: display === 'Barchart' ? 'Piechart' : 'Barchart' });
  }


 renderInner() {
    let { display } = this.state;
    
    if (display === 'Barchart') {
      return (
      
      <div className="barchart_class">

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

                  
                  ticks: {display: false} , 
                  
                
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



      </div>
      )



    } else if (display === 'Piechart') {
      return (

      <div className="piechart">
       <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              
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












  // *****************************************************x*****************************//

  




  render(){
    return (
      <div className="chart">

      <div className = 'toggle'>
      <button type="button" class="btn btn-primary btn-lg" onClick={this.changeDisplay} >Toggle Me</button>

      </div>
      
        {this.renderInner()}


        </div>
            )
          }
        }

export default Chart;


      