import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const SkeletonPost = () => {
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box margin={1}>
          <Skeleton variant='circle'>
            <Avatar />
          </Skeleton>
        </Box>
        <Box width='100%'>
          <Skeleton width='100%'>
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>

      <Skeleton variant='rect' width='100%'>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </div>
  );
};

export default SkeletonPost;
