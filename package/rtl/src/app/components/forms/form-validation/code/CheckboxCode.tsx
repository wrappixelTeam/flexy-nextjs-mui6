import CodeDialog from '@/app/components/shared/CodeDialog'
import React from 'react'
const CheckboxCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Stack, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 19,
  height: 19,
  marginLeft: '4px',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',

  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary : theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  boxShadow: 'none',
  width: 19,
  height: 19,
  '&:before': {
    display: 'block',
    width: 19,
    height: 19,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});


function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      color={props.color ? props.color : 'default'}
      checkedIcon={
        <BpCheckedIcon
          sx={{
            backgroundColor: props.color ? '{props.color}.main' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const validationSchema = yup.object({
  color: yup.array().min(1, 'At least one color is required'),
});

const formik = useFormik({
    initialValues: {
      color: [],
    },
    validationSchema,
    onSubmit: (values) => {
      alert(values.color);
    },
  });

<form onSubmit={formik.handleSubmit}>
  <Stack>
    <Box mt="-10px" mb={3}>
      <CustomCheckbox
        color="primary"
        value="primary"
        name="color"
        onChange={formik.handleChange}
      />
      <CustomCheckbox
        value="secondary"
        name="color"
        color="secondary"
        onChange={formik.handleChange}
      />
      <CustomCheckbox value="error" name="color" color="error" onChange={formik.handleChange} />
      {formik.errors.color && (
        <FormHelperText error id="standard-weight-helper-text-email-login">
          {' '}
          {formik.errors.color}{' '}
        </FormHelperText>
      )}
    </Box>
    <Stack direction="row" justifyContent="flex-end">
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  </Stack>
</form>
`}
      </CodeDialog>
    </>
  )
}

export default CheckboxCode
