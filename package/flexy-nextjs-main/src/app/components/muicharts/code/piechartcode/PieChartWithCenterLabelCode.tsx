import React from 'react'
import CodeDialog from '@/app/components/shared/CodeDialog'

function PieChartWithCenterLabelCode() {
  return (
    <CodeDialog>
      {`
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'PieChartWithCenterLabelChart ',
},
]; 


const data = [
  { value: 5, label: 'A', color: '#5D87FF' },
  { value: 10, label: 'B', color: '#0074BA' },
  { value: 15, label: 'C', color: '#01C0C8' },
  { value: 20, label: 'D', color: '#CCDA4E' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }: any) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function PieChartWithCenterLabelChart() {
  return (
   

          <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
              <PieCenterLabel>Center label</PieCenterLabel>
          </PieChart>

  );
}


            `}
    </CodeDialog>
  )
}

export default PieChartWithCenterLabelCode
