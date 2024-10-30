import { Button, Box } from '@mui/material';

export const SubmitButton = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#6d28d9',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '10px 20px',
          fontWeight: 'bold',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.2s',
          '&:hover': {
            backgroundColor: '#7c3aed', // Lighter purple on hover
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
            transform: 'scale(1.05)',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};
