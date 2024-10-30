import BaseNode from '../baseNode';
import { Typography, Box } from '@mui/material';

export const TransformerNode = (props) => (
  <BaseNode
    {...props}
    label="Transformer"
    showNameType={true}
    inputHandles={[{ id: 'input', position: '25%' }]}
    outputHandles={[{ id: 'output', position: '75%' }]}
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
        Transforms data based on defined parameters.
      </Typography>
    </Box>
  </BaseNode>
);
