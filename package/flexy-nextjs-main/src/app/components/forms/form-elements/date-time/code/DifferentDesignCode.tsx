import CodeDialog from '@/app/components/shared/CodeDialog'
import React from 'react'
const DifferentDesignCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

const [value, setValue] = React.useState<Dayjs | null>(null);

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateTimePicker
    slotProps={{
      textField: {
        fullWidth: true,
        size: 'small',
        sx: {
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
          },
          "& .MuiFormHelperText-root": {
            display: "none",
          },
        },
      },
    }}
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider>
`}
      </CodeDialog>
    </>
  )
}

export default DifferentDesignCode
