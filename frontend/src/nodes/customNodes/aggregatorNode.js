// AggregatorNode.js
import BaseNode from '../baseNode';
import { Typography, Box } from '@mui/material';

export const AggregatorNode = (props) => (
  <BaseNode
    {...props}
    label="Aggregator"
    showNameType={false}
    inputHandles={[
      { id: 'input1', position: '20%' },
      { id: 'input2', position: '50%' },
      { id: 'input3', position: '80%' },
    ]}
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
        Aggregates Results.
      </Typography>
    </Box>{' '}
  </BaseNode>
);
