"use client"
import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import BasicSparkLineCode from '../code/sparklinecode/BasicSparkLineCode';
import ParentCard from '../../shared/ParentCard';
import { useTheme } from '@mui/material';



function BasicSparkLine() {
    const theme = useTheme();
    const primary = theme.palette.primary.main;


    return (
        <ParentCard title="Basic Chart" codeModel={<BasicSparkLineCode />}>

            <Stack direction="row" sx={{ width: '100%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} colors={[primary]} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        plotType="bar"
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                        colors={[primary]}
                    />
                </Box>
            </Stack>
        </ParentCard>
    )
}

export default BasicSparkLine