"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material";
import ParentCard from "../../shared/ParentCard";
import BiaxialBarCode from "../code/barchartcode/BiaxialBarCode";


function BiaxialBarChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"
    ];

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    return (
        <ParentCard title="Biaxial Chart" codeModel={<BiaxialBarCode />}>
            <BarChart
                borderRadius={6}
                height={300}
                series={[
                    {
                        data: pData,
                        label: "Page Views",
                        id: "pvId",
                        color: primary,
                        yAxisId: "leftAxisId",
                    },
                    {
                        data: uData,
                        label: "Visitors",
                        id: "uvId",
                        color: secondary,
                        yAxisId: "rightAxisId",
                    },
                ]}
                xAxis={[{
                    data: xLabels, scaleType: "band", categoryGapRatio: 0.8,
                    barGapRatio: 0.8
                } as any]}
                yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" },

                ]}
                rightAxis="rightAxisId"

            />
        </ParentCard>
    );
}

export default BiaxialBarChart;
