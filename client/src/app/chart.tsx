'use client';

import Chart from 'react-apexcharts'

const series = [{
  data: [21, 22, 10, 28, 16, 21, 13, 30]
}]

const options = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
      'Amber',
      ['Peter', 'Brown'],
      ['Mary', 'Evans'],
      ['David', 'Wilson'],
      ['Lily', 'Roberts'], 
    ],
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  }
}


export default function Demo() {
  return (
    <>
     <Chart options={options} series={series} type="bar" height={350} />
    </>
  )
}
