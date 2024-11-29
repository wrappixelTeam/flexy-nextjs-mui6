import CodeDialog from "@/app/components/shared/CodeDialog";
import React from "react";
const IconBottomCode = () => {
    return (
        <>
            <CodeDialog>
                {`
"use client";
import * as React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const SCROLLABLE_TAB = [
  { value: '1', icon: <IconUser width={20} height={20} />, label: 'Item 1' },
  { value: '2', icon: <IconUser width={20} height={20} />, label: 'Item 2' },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item 3' },
  { value: '4', icon: <IconUser width={20} height={20} />, label: 'Item 4' },
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Item 5' },
  { value: '6', icon: <IconUser width={20} height={20} />, label: 'Item 6' },
  { value: '7', icon: <IconUser width={20} height={20} />, label: 'Item 7' }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" variant="scrollable" scrollButtons="auto">
        {SCROLLABLE_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="top" value={tab.value} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {SCROLLABLE_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`}
            </CodeDialog>
        </>
    );
};

export default IconBottomCode;