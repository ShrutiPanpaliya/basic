import React from 'react';
import {Bar} from 'react-chartjs-2';
import {chart as ChartJS} from 'chart.js/auto';
// const BarChart = (chartData) =>
// {
//     console.log(chartData)
//     return (
//         <Bar data={chartData}/>
//     )
    
// }
function BarChart({chartData})
{
    return(
        <Bar data = {chartData}/>
    );
}
export default BarChart;