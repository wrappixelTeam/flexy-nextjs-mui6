import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import TiptapEditor from '@/app/components/forms/form-tiptap/TiptapEditor';

const GeneralCard = () => {
  return (
    (<Box p={3}>
      <Typography variant="h5">General</Typography>
      <Grid container mt={3}>
        {/* 1 */}
        <Grid display="flex" alignItems="center" size={12}>
          <CustomFormLabel htmlFor="p_name" sx={{ mt: 0 }}>
            Product Name{" "}
            <Typography color="error.main" component="span">
              *
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid size={12}>
          <CustomTextField
            id="p_name"
            placeholder="Product Name"
            value="Sample Product"
            fullWidth
          />
          <Typography variant="body2">
            A product name is required and recommended to be unique.
          </Typography>
        </Grid>

        <Grid display="flex" alignItems="center" size={12}>
          <CustomFormLabel htmlFor="desc">Description</CustomFormLabel>
        </Grid>
        <Grid size={12}>
          <TiptapEditor />
          <Typography variant="body2">
            Set a description to the product for better visibility.
          </Typography>
        </Grid>
      </Grid>
    </Box>)
  );
};

export default GeneralCard;
