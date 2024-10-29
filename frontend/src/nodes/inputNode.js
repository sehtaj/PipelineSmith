// InputNode.js
import BaseNode from './baseNode';

export const InputNode = (props) => (
  <BaseNode
    {...props}
    label="Input"
    showNameType={true}
    outputHandles={[{ id: 'value', position: '50%' }]}
  />
);
