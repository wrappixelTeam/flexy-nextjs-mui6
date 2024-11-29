import React from 'react'
import CodeDialog from '@/app/components/shared/CodeDialog'

function PercentAreaCode() {
  return (
    <CodeDialog>
      {`

"use client";
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'PercentAreaChart ',
},
]; 
const time = [
    new Date(2015, 1, 0),
    new Date(2015, 2, 0),
    new Date(2015, 3, 0),
    new Date(2015, 4, 0),
    new Date(2015, 5, 0),
    new Date(2015, 6, 0),
    new Date(2015, 7, 0),
];
const a = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const b = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const c = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const getPercents = (array) =>
    array.map((v, index) => (100 * v) / (a[index] + b[index] + c[index]));

export default function PercentAreaChart() {

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const amtDatacolor = theme.palette.error.main;

    return (

            <LineChart
            
                height={300}
                series={[
                    {
                        data: getPercents(a),
                        type: 'line',
                        label: 'Revenue',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: primary
                    },
                    {
                        data: getPercents(b),
                        type: 'line',
                        label: 'Profits',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: secondary
                    },
                    {
                        data: getPercents(c),
                        type: 'line',
                        label: 'Expenses',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: amtDatacolor
                    },
                ]}
                xAxis={[
                    {
                        scaleType: 'time',
                        data: time,
                        min: time[0].getTime(),
                        max: time[time.length - 1].getTime(),

                    },
                ]}
            />
    );
}
`}
    </CodeDialog>
  )
}

export default PercentAreaCode
