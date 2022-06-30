import { Grid } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ChartDataLabels)
ChartJS.register(ArcElement, Tooltip, Legend);



interface IChart {
    labels: string[];
    data: number[];
}

const Chart = ({ labels, data }: IChart) => {



    const chartData = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };



    return <Grid item xs={12} sm={12} md={12} data-testid="graph_container" className='killPadding'>
        <Pie data={chartData} options={{

            plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                    color: '#000000'
                }
            }
        }} />
    </Grid>;
}


export default Chart;