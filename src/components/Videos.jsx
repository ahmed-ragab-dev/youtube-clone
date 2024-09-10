import React from 'react';
import { Grid } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ flexGrow: 1 }}
      alignItems="start"
      direction={direction || 'row'}
    >
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={6} lg={4} width={'100%'} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
