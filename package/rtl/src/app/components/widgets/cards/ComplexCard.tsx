import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconMessage2, IconEye, IconPoint } from '@tabler/icons-react';
import BlankCard from '../../shared/BlankCard';

const complexCard = [
  {
    avatar: "/images/users/1.jpg",
    coveravatar: "/images/blog/blog-img1.jpg",
    title: 'As yen tumbles, gadget-loving Japan goes for iPhones',
    category: 'Social',
    name: 'Georgeanna Ramero',
    view: '9,125',
    comments: '3',
    time: 'Mon, Dec 19',
  },
  {
    avatar: "/images/users/2.jpg",
    coveravatar: "/images/blog/blog-img2.jpg",
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Gadget',
    name: 'Georgeanna Ramero',
    view: '4,150',
    comments: '38',
    time: 'Sun, Dec 18',
  },
  {
    avatar: "/images/users/3.jpg",
    coveravatar: "/images/blog/blog-img3.jpg",
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,480',
    comments: '12',
    time: 'Sat, Dec 17',
  },
];

const ComplexCard = () => {
  return (
    (<Grid container spacing={3}>
      {complexCard.map((author, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            sm: 4
          }}>
          <BlankCard className="hoverCard">
            <>
              <Typography component={Link} href="/">
                <CardMedia
                  component="img"
                  height="240"
                  image={author.coveravatar}
                  alt="green iguana"
                />
              </Typography>
              <CardContent>
                <Stack direction="row" sx={{ marginTop: '-45px' }}>
                  <Tooltip title={author.name} placement="top">
                    <Avatar aria-label="recipe" src={author.avatar}></Avatar>
                  </Tooltip>
                  <Chip
                    sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: (theme: any) => theme.palette.mode === "light" ? "white" : "#111c2d" }}
                    label="2 min Read"
                    size="small"
                  ></Chip>
                </Stack>
                <Chip label={author.category} size="small" sx={{ marginTop: 2 }}></Chip>
                <Box my={3}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                    component={Link}
                    href="/"
                  >
                    {author.title}
                  </Typography>
                </Box>
                <Stack direction="row" gap={3} alignItems="center">
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconEye size="18" /> {author.view}
                  </Stack>
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconMessage2 size="18" /> {author.comments}
                  </Stack>

                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size="16" />
                    <small>{author.time}</small>
                  </Stack>
                </Stack>
              </CardContent>
            </>
          </BlankCard>
        </Grid>
      ))}
    </Grid>)
  );
};

export default ComplexCard;
