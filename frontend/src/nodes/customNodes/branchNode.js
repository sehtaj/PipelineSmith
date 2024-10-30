// BranchNode.js
import BaseNode from '../baseNode';
import { Typography, Box } from '@mui/material';

export const BranchNode = (props) => (
  <BaseNode
    {...props}
    label="Branch"
    showNameType={false}
    inputHandles={[{ id: 'input', position: '50%' }]}
    outputHandles={[
      { id: 'output1', position: '30%' },
      { id: 'output2', position: '70%' },
    ]}
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
        Branches Output.
      </Typography>
    </Box>{' '}
  </BaseNode>
);