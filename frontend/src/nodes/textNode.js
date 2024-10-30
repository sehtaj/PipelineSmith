import React, { useState, useEffect } from 'react';
import BaseNode from './baseNode';
import { TextField } from '@mui/material';

export const TextNode = (props) => {
  // Local state to control TextField input
  const [text, setText] = useState(props.data?.text || '{{input}}');

  useEffect(() => {
    // Update local state whenever props.data.text changes
    if (props.data?.text !== text) {
      setText(props.data?.text || '{{input}}');
    }
  }, [props.data?.text]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText); // Update local state immediately for smooth typing
    if (props.setData) {
      props.setData({ text: newText }); // Update parent data
    }
  };

  return (
    <BaseNode
      {...props}
      label="Text"
      showNameType={false}
      outputHandles={[{ id: 'output', position: '50%' }]}
    >
      <TextField
        label="Text"
        variant="outlined"
        size="small"
        value={text}
        onChange={handleTextChange}
        sx={{
          width: '100%',
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
