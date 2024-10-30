import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import {
  Box,
  Typography,
  TextField,
  Paper,
  Popover,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getNodeIcon } from '../utils/iconUtils';

const BaseNode = ({
  id,
  data = {},
  label = '',
  inputHandles = [],
  outputHandles = [],
  showNameType = false,
  children,
}) => {
  const [name, setName] = useState(
    data.name || id.replace('custom-', `${label.toLowerCase()}_`)
  );
  const [type, setType] = useState(data.type || 'Text');
  const [anchorEl, setAnchorEl] = useState(null);
  const [hover, setHover] = useState(false); // State for hover effect

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setType(value);
    handleClose();
  };

  const renderHandles = (handles, type) =>
    handles.map((handle, index) => (
      <Handle
        key={`${type}-${index}`}
        type={type}
        position={type === 'target' ? Position.Left : Position.Right}
        id={`${id}-${handle.id}`}
        style={{
          top: handle.position,
          backgroundColor: '#ffffff', // Inner circle color (white)
          width: '10px', // Size of the inner circle
          height: '10px',
          borderRadius: '50%', // Makes it circular
          border: '1px solid #6d28d9', // Purple outline color
          boxSizing: 'border-box', // Ensures the border is outside the inner circle
        }}
      />
    ));

  return (
    <Paper
      elevation={2}
      sx={{
        width: 220,
        padding: 1.5,
        borderRadius: '12px',
        border: '3px solid #f3e8ff',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
        '&:hover': {
          backgroundColor: '#fdfdff',
          borderColor: '#b4aee8',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
      onMouseEnter={() => setHover(true)} // Set hover to true on mouse enter
      onMouseLeave={() => setHover(false)} // Set hover to false on mouse leave
    >
      <Box display="flex" alignItems="center" mb={3}>
        {/* Change icon color based on hover state */}
        {React.cloneElement(getNodeIcon(label), {
          fontSize: 'small',
          sx: { color: hover ? '#7c3aed' : '#8a8a8a' },
        })}
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color={hover ? '#7c3aed' : '#8a8a8a'} // Change color based on hover state
          ml={1}
        >
          {label}
        </Typography>
      </Box>

      {showNameType && (
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#7c3aed',
              },
            }}
          />

          {/* Dropdown as TextField */}
          <TextField
            label="Type"
            variant="outlined"
            size="small"
            value={type}
            onClick={handleDropdownClick}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleDropdownClick} size="small">
                  <ArrowDropDownIcon
                    sx={{
                      transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: '0.3s',
                    }}
                  />
                </IconButton>
              ),
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
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#7c3aed',
              },
            }}
          />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              sx: {
                width: 220,
              },
            }}
          >
            <List>
              {['Text', 'File'].map((option) => (
                <ListItem
                  button
                  key={option}
                  onClick={() => handleSelect(option)}
                  sx={{
                    padding: '8px 16px',
                    '&:hover': {
                      backgroundColor: '#f7f0fc',
                    },
                  }}
                >
                  {option}
                </ListItem>
              ))}
            </List>
          </Popover>
        </Box>
      )}

      {children}
      {renderHandles(inputHandles, 'target')}
      {renderHandles(outputHandles, 'source')}
    </Paper>
  );
};

export default BaseNode;
