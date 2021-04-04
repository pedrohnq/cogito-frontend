import React from 'react';
import Chart from 'react-apexcharts'
import {ChartArea} from './style'

var data = {
    series: [1, 2, 3],
    
    options: {
      dataLabels: {
        enabled: false,
      },
      
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 800,
        options: {
          chart: {
            width: 350
          },
        }
      }],
      labels: ['Comprador', 'Vendedor','Neutro'],
      colors: ['#18AD00' ,'#CF0000' ,'#005C9D'],
      legend: {
        show: false
      },
    },
  }


const DonutChart = () => {
  return(
      <ChartArea>
        <Chart options={data.options} series={data.series} width='500'  type='donut'/>
      </ChartArea>
      
    );
}

export default DonutChart;