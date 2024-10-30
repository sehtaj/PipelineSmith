import React, { useState, useEffect } from 'react';
import BaseNode from './baseNode';
import { TextField, Box, Typography } from '@mui/material';
import { Handle, Position } from 'reactflow';

export const TextNode = (props) => {
  const [text, setText] = useState(props.data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    if (props.data?.text !== text) {
      setText(props.data?.text || '{{input}}');
    }
  }, [props.data?.text]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (props.setData) {
      props.setData({ text: newText });
    }

    const variablePattern = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const foundVariables = [
      ...new Set(
        [...newText.matchAll(variablePattern)].map((match) => match[1])
      ),
    ];
    setVariables(foundVariables);
  };

  const stopZoomPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <BaseNode
      {...props}
      label="Text"
      showNameType={false}
      outputHandles={[{ id: 'output', position: '50%' }]}
    >
      {variables.map((variable, index) => (
        <Box
          key={`box-${variable}`}
          sx={{
            position: 'absolute',
            top: `${50 + index * 30}px`,
            left: '0px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Handle
            key={`handle-${variable}`}
            type="target"
            position={Position.Left}
            id={`variable-${variable}`}
            style={{
              backgroundColor: '#ffffff',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: '1px solid #6d28d9',
              boxSizing: 'border-box',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: '#9e9e9e',
              position: 'absolute',
              left:
                variable.length <= 6 ? '-34px' : `-${variable.length * 6}px`,
              transform: 'translateY(14px)',
              whiteSpace: 'nowrap',
            }}
          >
            {variable}
          </Typography>
        </Box>
      ))}

      <Box
        onWheelCapture={stopZoomPropagation}
        sx={{
          maxHeight: 250,
          overflowY: 'auto',
        }}
      >
        <TextField
          label="Text"
          variant="outlined"
          size="small"
          multiline
          fullWidth
          value={text}
          onChange={handleTextChange}
          InputProps={{
            sx: {
              minHeight: '50px',
              paddingTop: '8px',
              paddingBottom: '8px',
              overflowY: 'auto',
              resize: 'none',
            },
          }}
          sx={{
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
              color: '#9e9e9e',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#7c3aed',
            },
          }}
        />
      </Box>
    </BaseNode>
  );
};
