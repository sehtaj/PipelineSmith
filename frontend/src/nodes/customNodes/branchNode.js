// BranchNode.js
import BaseNode from '../baseNode';

export const BranchNode = (props) => (
  <BaseNode
    {...props}
    label="Branch"
    showNameType={false}
    inputHandles={[{ id: 'input', position: '50%' }]}
    outputHandles={[
      { id: 'output1', position: '30%' },
      { id: 'output2', position: '70%' }
    ]}
  >
    <div>Branches output</div>
  </BaseNode>
);
