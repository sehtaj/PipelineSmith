// OutputNode.js
import BaseNode from './baseNode';

export const OutputNode = (props) => (
  <BaseNode
    {...props}
    label="Output"
    showNameType={true}
    inputHandles={[{ id: 'value', position: '50%' }]}
  />
);
