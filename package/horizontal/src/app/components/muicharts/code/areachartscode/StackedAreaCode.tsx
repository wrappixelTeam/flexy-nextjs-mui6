import React from 'react'
import CodeDialog from '@/app/components/shared/CodeDialog'

function StackedAreaCode() {
  return (
    <CodeDialog>
      {`

"use client";
import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'StackedAreaChart ',
},
]; 

export default function StackedAreaChart() {
      const monthlyProfits = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const monthlyRevenue = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const monthlyExpenses = [2400, 2210, 0, 2000, 2181, 2500, 2100];
    const xLabels = ["January", "February", "March", "April", "May", "June", "July"];

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const expDatacolor = theme.palette.error.main;

    return (

            <LineChart
                
                height={300}
                 series={[
                    { data: monthlyRevenue, label: 'Revenue', area: true, stack: 'total', showMark: false, color: primary },
                    { data: monthlyProfits, label: 'Profits', area: true, stack: 'total', showMark: false, color: secondary },
                    {
                        data: monthlyExpenses,
                        label: 'Expenses',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: expDatacolor
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [\`& .\${lineElementClasses.root}\`]: {
                display: 'none',
                    },
                }}
            />
      
    );
}
`}
    </CodeDialog>
  )
}

export default StackedAreaCode
