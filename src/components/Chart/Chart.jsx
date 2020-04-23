import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line ,Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = ({data:{confirmed ,deaths,recovered} ,country}) => {
const [dailyData , setDailyData ] = useState ({});

useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDaily();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

const lineChart =
 (
    dailyData.length ?
    <Line data={{
        labels: dailyData.map( ({date}) => date ),
        datasets:[{
            data: dailyData.map(({confirmed}) => confirmed ),
            label: 'infected',
            bordercolor: 'rgba(255, 0, 0, 0.1)',
            easing: 'easeInCubic',
            backgroundColor:'rgba(0, 0, 255, 0.1)',
            fill:true
        },
        {
            data: dailyData.map(({deaths}) => deaths ),
            label: 'Deaths',
            bordercolor: '#3333ff',
            backgroundColor:'rgba(255,0,0,0.8)',
            fill:true
        }
    ],
    }}/> : null

)
    return (
        <div className={styles.container}>
        {country?barChart:lineChart}
        </div>
    )
}

export default Chart;
