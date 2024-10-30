// DisplayNode.js
import BaseNode from '../baseNode';
import { Typography, Box } from '@mui/material';

export const DisplayNode = (props) => (
  <BaseNode
    {...props}
    label="Display"
    showNameType={false}
    outputHandles={[{ id: 'output', position: '50%' }]}
  >
    <Box sx={{ mt: 1 }}>
      <Typography
        variant="caption"
        sx={{
          fontWeight: 400,
          color: '#9e9e9e',
          textAlign: 'left',
        }}
      >
        Diplays Results.
      </Typography>
    </Box>{' '}
  </BaseNode>
);
