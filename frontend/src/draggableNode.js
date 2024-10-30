import { Icon } from '@mui/material';
import { getNodeIcon } from './utils/iconUtils';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        border: '1px solid #dcdcdc',
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#5c5c5c',
        transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.2s',
      }}
      draggable
      // Adding hover styles
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#ede7f6';
        e.currentTarget.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#f9f9f9';
        e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <Icon sx={{ marginBottom: '4px', color: '#6d28d9' }}>
        {getNodeIcon(label)}
      </Icon>
      <span
        style={{
          fontSize: '12px',
          fontWeight: '500',
          color: 'gray',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#7c3aed')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'gray')}
      >
        {label}
      </span>
    </div>
  );
};
