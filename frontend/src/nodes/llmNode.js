// LLMNode.js
import BaseNode from './baseNode';
import { Typography, Box } from '@mui/material';

export const LLMNode = (props) => (
  <BaseNode
    {...props}
    label="LLM"
    showNameType={false}
    inputHandles={[
      { id: 'system', position: '33%' },
      { id: 'prompt', position: '67%' },
    ]}
    outputHandles={[{ id: 'response', position: '50%' }]}
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
        This is an LLM{' '}
      </Typography>
    </Box>{' '}
  </BaseNode>
);