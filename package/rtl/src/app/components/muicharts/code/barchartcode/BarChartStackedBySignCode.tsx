import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";

function BarChartStackedBySignCode() {
  return (
    <CodeDialog>
      {`
  
'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material';


const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BarChartStackedBySignChart ',
},
]; 


function BarChartStackedBySignChart() {
  const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
  const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

  const xLabels = [
    "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"
  ];
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
   
      <BarChart
      borderRadius={6}
        height={300}
        series={[
          { data: pData, label: 'Page Views', id: 'pvId', stack: 'stack1', color: primary },
          { data: uData, label: 'Visitors', id: 'uvId', stack: 'stack1', color: secondary },
        ]}
        xAxis={[{
          data: xLabels, scaleType: "band",
          categoryGapRatio: 0.8,
          barGapRatio: 0.8
        } as any]}
      />
 
  )
}

export default BarChartStackedBySignChart

`}
    </CodeDialog>
  );
}

export default BarChartStackedBySignCode;
