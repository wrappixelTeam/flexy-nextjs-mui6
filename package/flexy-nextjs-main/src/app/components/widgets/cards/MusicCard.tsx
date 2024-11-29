import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';

const musicCard = [
  {
    title: 'Uptown',
    subheader: 'Jon Bon Jovi',
    img: "/images/blog/blog-img5.jpg",
  },
  {
    title: 'Blank Space',
    subheader: 'Madonna',
    img: "/images/blog/blog-img4.jpg",
  },
  {
    title: 'Lean On',
    subheader: 'Jennifer Lopez',
    img: "/images/blog/blog-img3.jpg",
  },
];

const MusicCard = () => {
  return (
    <Grid container spacing={3}>
      {musicCard.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ display: 'flex', p: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {card.subheader}
                </Typography>
              </CardContent>
              <Stack direction="row" spacing={2} px={2} pb={3}>
                <IconButton aria-label="previous">
                  <IconPlayerSkipBack width="20" />
                </IconButton>
                <IconButton aria-label="play/pause" color="error">
                  <IconPlayerPlay width="20" />
                </IconButton>
                <IconButton aria-label="next">
                  <IconPlayerSkipForward width="20" />
                </IconButton>
              </Stack>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 180 }}
              image={card.img}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MusicCard;
