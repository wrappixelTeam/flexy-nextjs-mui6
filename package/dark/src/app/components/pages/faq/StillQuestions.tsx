import { Grid2 as Grid, Typography, AvatarGroup, Avatar, Stack, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const StillQuestions = () => {
  return (
    (<Grid container spacing={3} justifyContent="center">
      <Grid
        size={{
          xs: 12,
          lg: 10
        }}>
        <Box bgcolor="primary.light" p={5} mt={7}>
          <Stack>
            <AvatarGroup sx={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Avatar alt="Remy Sharp" src={"/images/users/1.jpg"} />
              <Avatar alt="Travis Howard" src={"/images/users/2.jpg"} />
              <Avatar alt="Cindy Baker" src={"/images/users/3.jpg"} />
            </AvatarGroup>
          </Stack>

          <Typography variant="h3" textAlign="center" mt={3} mb={1}>
            Still have questions
          </Typography>
          <Typography variant="h6" fontWeight={400} lineHeight="23px" color="textSecondary" textAlign="center">
            Can&apos;t find the answer your&apos;re looking for ? Please chat to our friendly team.
          </Typography>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary">
              Chat with us
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>)
  );
};

export default StillQuestions;
