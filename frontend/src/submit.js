import React, { useState } from 'react';
import { Button, Box, Snackbar, Alert } from '@mui/material';
import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({ nodes: state.nodes, edges: state.edges }));
  const [alertData, setAlertData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit pipeline data');
      }

      const data = await response.json();
      setAlertData(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, DAG: ${data.is_dag ? "Yes" : "No"}`);
      setOpen(true); 
    } catch (error) {
      console.error('Error:', error);
      setAlertData('An error occurred while submitting the pipeline.');
      setOpen(true);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
      <Button
        variant="contained"
        onClick={handleSubmit} 
        sx={{
          backgroundColor: '#6d28d9',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '10px 20px',
          fontWeight: 'bold',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.2s',
          '&:hover': {
            backgroundColor: '#7c3aed',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
            transform: 'scale(1.05)',
          },
        }}
      >
        Submit
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Center the Snackbar
        sx={{ maxWidth: '80%' }} // Make the Snackbar wider
      >
        <Alert
          onClose={handleClose}
          severity={alertData?.includes("error") ? "error" : "success"}
          sx={{
            backgroundColor: '#7c3aed',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '20px',
            fontSize: '1.1rem', // Larger text for visibility
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {alertData}
        </Alert>
      </Snackbar>
    </Box>
  );
};
