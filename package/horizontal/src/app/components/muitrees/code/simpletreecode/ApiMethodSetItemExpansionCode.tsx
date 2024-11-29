import React from 'react'
import CodeDialog from '@/app/components/shared/CodeDialog'

function ApiMethodSetItemExpansionCode() {
  return (
    <CodeDialog>
      {`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';
            
const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ApiMethodSetItemExpansion ',
},
]; 

export default function ApiMethodSetItemExpansion() {
    const apiRef = useTreeViewApiRef();

     const handleExpandClick = (event: React.SyntheticEvent<Element, Event>) => {
        if (apiRef.current) {
            apiRef.current.setItemExpansion(event, 'grid', true);
        }
    };

    const handleCollapseClick = (event: React.SyntheticEvent<Element, Event>) => {
        if (apiRef.current) {
            apiRef.current.setItemExpansion(event, 'grid', false);
        }
    };

    return (
            <Stack spacing={2}>
                <Stack spacing={2} direction="row">
                    <Button onClick={handleExpandClick}>Expand Data Grid</Button>
                    <Button onClick={handleCollapseClick}>Collapse Data Grid</Button>
                </Stack>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <SimpleTreeView apiRef={apiRef}>
                        <TreeItem itemId="grid" label="Data Grid">
                            <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                            <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                            <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                        </TreeItem>
                        <TreeItem itemId="pickers" label="Date and Time Pickers">
                            <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                            <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                        </TreeItem>
                        <TreeItem itemId="charts" label="Charts">
                            <TreeItem itemId="charts-community" label="@mui/x-charts" />
                        </TreeItem>
                        <TreeItem itemId="tree-view" label="Tree View">
                            <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                        </TreeItem>
                    </SimpleTreeView>
                </Box>
            </Stack>
 
    );
}


`}
    </CodeDialog>
  )
}

export default ApiMethodSetItemExpansionCode
