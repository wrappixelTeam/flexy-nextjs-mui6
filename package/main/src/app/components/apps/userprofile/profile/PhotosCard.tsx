import { Typography, ImageList, ImageListItem, Skeleton, Box } from '@mui/material';
import React, { useEffect } from 'react';
import ChildCard from '../../../../components/shared/ChildCard';
import Image from 'next/image';

const photos = [
  {
    img: "/images/users/1.jpg",
    id: 1,
  },
  {
    img: "/images/users/2.jpg",
    id: 2,
  },
  {
    img: "/images/users/3.jpg",
    id: 3,
  },
  {
    img: "/images/users/4.jpg",
    id: 4,
  },
  {
    img: "/images/users/5.jpg",
    id: 5,
  },
  {
    img: "/images/users/6.jpg",
    id: 6,
  },
  {
    img: "/images/users/7.jpg",
    id: 7,
  },
  {
    img: "/images/users/8.jpg",
    id: 8,
  },
  {
    img: "/images/users/2.jpg",
    id: 9,
  },
];

const PhotosCard = () => {

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ChildCard>
      <Typography variant="h4">Photos</Typography>
      <ImageList cols={3} gap={10}>
        {photos.map((photo) => (
          <Box key={photo.id}>
            {
              isLoading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={93}
                    key={photo.id}
                  ></Skeleton>
                </>
              ) : (
                <ImageListItem key={photo.id}>
                  <Image
                    src={photo.img}
                    alt={photo.img} width={92} height={92}
                    loading="lazy" style={{ borderRadius: 8 }}
                  />
                </ImageListItem>
              )}
          </Box>
        ))}
      </ImageList>
    </ChildCard >
  )
};

export default PhotosCard;
