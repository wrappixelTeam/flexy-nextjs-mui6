import React from 'react'
import CodeDialog from '@/app/components/shared/CodeDialog'

function OnSeriesItemClickCode() {
  return (
    <CodeDialog>
      {`
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
      
const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'OnSeriesItemClickChart ',
},
]; 

const items = [
  { value: 10, label: 'Series A ( no Id )', color: '#CCDA4E' },
  { id: 'id_B', value: 15, label: 'Series B', color: '#0074BA' },
  { id: 'id_C', value: 20, label: 'Series C', color: '#01C0C8' },
];

const formatObject = (obj: null) => {
    if (obj === null) {
        return '  undefined';
    }
    return JSON.stringify(obj, null, 2)
        .split('\n')
        .map((l) =>   {l})
        .join('\n');
};
      export default function OnSeriesItemClickChart() {
  const [identifier, setIdentifier] = React.useState(null);
      const [id, setId] = React.useState(undefined);

        const handleClick = (event: any, itemIdentifier: any, item: any) => {
        setId(item.id);
        setIdentifier(itemIdentifier);
    };


      return (
   

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Typography
            component="pre"
            sx={{ maxWidth: { xs: '100%', md: '50%', flexShrink: 1 }, overflow: 'auto' }}
          >
            {\`item id: \${id ?? 'undefined'}

                 item identifier:
                 \${formatObject(identifier)}\`}
          </Typography>

          <PieChart
            series={[
              {
                data: items,
              },
            ]}
            onItemClick={handleClick}
            width={400}
            height={200}
            margin={{ right: 200 }}
          />
        </Stack>
 
      );
}


      `}
    </CodeDialog>
  )
}

export default OnSeriesItemClickCode
