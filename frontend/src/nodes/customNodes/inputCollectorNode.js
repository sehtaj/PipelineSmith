import React, { useState, useEffect } from 'react';
import BaseNode from '../baseNode';
import { TextField } from '@mui/material';

export const InputCollectorNode = (props) => {
  // Local state to control TextField input
  const [dataEntry, setDataEntry] = useState(props.data?.dataEntry || '');

  useEffect(() => {
    // Sync with parent data if it changes
    if (props.data?.dataEntry !== dataEntry) {
      setDataEntry(props.data?.dataEntry || '');
    }
  }, [props.data?.dataEntry]);

  const handleDataEntryChange = (e) => {
    const newDataEntry = e.target.value;
    setDataEntry(newDataEntry); // Update local state for smooth typing
    if (props.setData) {
      props.setData({ dataEntry: newDataEntry }); // Update parent data
    }
  };

  return (
    <BaseNode
      {...props}
      label="InputCollector"
      showNameType={true}
      inputHandles={[{ id: 'input', position: '50%' }]}
    >
      <TextField
        label="Data Entry"
        variant="outlined"
        size="small"
        placeholder="Enter data"
        value={dataEntry}
        onChange={handleDataEntryChange}
        sx={{
          width: '100%',
          mt: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: 'transparent',
            '& fieldset': {
              borderColor: '#d1d5db',
            },
            '&:hover fieldset': {
              borderColor: '#a78bfa',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7c3aed',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#9e9e9e', // Default color for the label
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#7c3aed', // Color for the label when focused
          },
        }}
      />
    </BaseNode>
  );
};
