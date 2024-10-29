// BaseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({
  id,
  data = {},
  label = '',
  inputHandles = [],
  outputHandles = [],
  showNameType = false,
  children,
}) => {
  const [name, setName] = useState(data.name || id.replace('custom-', `${label.toLowerCase()}_`));
  const [type, setType] = useState(data.type || 'Text');

  const renderHandles = (handles, type) =>
    handles.map((handle, index) => (
      <Handle
        key={`${type}-${index}`}
        type={type}
        position={type === 'target' ? Position.Left : Position.Right}
        id={`${id}-${handle.id}`}
        style={{ top: handle.position }}
      />
    ));

  return (
    <div style={{ width: 200, height: 100, border: '1px solid black', padding: '10px' }}>
      <div><span>{label}</span></div>
      
      {/* Conditionally render Name and Type fields */}
      {showNameType && (
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      )}
      
      {children}
      {renderHandles(inputHandles, 'target')}
      {renderHandles(outputHandles, 'source')}
    </div>
  );
};

export default BaseNode;
