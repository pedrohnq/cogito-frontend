import React, {useState, useEffect} from 'react'
import Chart from 'react-apexcharts'
import {ChartArea} from './style'
import axios from 'axios'


var data = {
    series: [0, 0, 0],
    
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
  const [seriesValues, setSeriesValues] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    axios.get('https://compass-cogito.herokuapp.com/')
      .then((response) => {
        setSeriesValues(response.data);
        data.series = [response.data['Comprador'], response.data['Vendedor'], response.data['Neutro']]
        setLoading(false)
      });
  });

  return(
      <ChartArea>
        {loading ? <h1>Carregando</h1> : 
        <Chart options={data.options} series={data.series} width='500'  type='donut'/>}
      </ChartArea>
      
    );
}

export default DonutChart;