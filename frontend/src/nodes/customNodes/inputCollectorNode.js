// InputCollectorNode.js
import BaseNode from '../baseNode';

export const InputCollectorNode = (props) => (
  <BaseNode
    {...props}
    label="InputCollector"
    showNameType={true}
    inputHandles={[{ id: 'input', position: '50%' }]}
  >
    <div>
      <label>Data Entry:</label>
      <input type="text" placeholder="Enter data" />
    </div>
  </BaseNode>
);
