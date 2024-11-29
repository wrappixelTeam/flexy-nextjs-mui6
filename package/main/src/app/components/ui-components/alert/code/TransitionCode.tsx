import CodeDialog from '@/app/components/shared/CodeDialog'
import React from 'react'
const TransitionCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";
import React from "react";
import { IconX } from "@tabler/icons-react";
import {
  Stack,
  Button,
  IconButton,
  Collapse,
  Alert,
} from "@mui/material";

<Stack spacing={1}>
    <Collapse in={open}>
        <Alert
            variant="filled"
            severity="info"
            sx={{ mb: 1 }}
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <IconX width={20} />
                </IconButton>
            }
        >
            Close me!
        </Alert>
    </Collapse>
</Stack>
<Button
    disabled={open}
    variant="contained"
    onClick={() => {
        setOpen(true);
    }}
>
    Re-open
</Button>`}
      </CodeDialog>
    </>
  )
}

export default TransitionCode
