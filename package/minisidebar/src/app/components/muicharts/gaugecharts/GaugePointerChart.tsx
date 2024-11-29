"use client"
import React from 'react'
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';
import ParentCard from "@/app/components/shared/ParentCard";
import GaugePointerCode from '../code/gaugechartscode/GaugePointerCode';




function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="red"
                strokeWidth={3}
            />
        </g>
    );
}

export default function GaugePointerChart() {
    return (

        <ParentCard title="GaugePointer  Chart" codeModel={<GaugePointerCode />}>
            <GaugeContainer
                width={200}
                height={200}
                startAngle={-110}
                endAngle={110}
                value={30}
            >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
            </GaugeContainer>
        </ParentCard>
    );
}