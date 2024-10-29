// DisplayNode.js
import BaseNode from '../baseNode';

export const DisplayNode = (props) => (
  <BaseNode
    {...props}
    label="Display"
    showNameType={false}
    outputHandles={[{ id: 'output', position: '50%' }]}
  >
    <div>Displays results</div>
  </BaseNode>
);
