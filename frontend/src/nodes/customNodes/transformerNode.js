// TransformerNode.js
import BaseNode from '../baseNode';

export const TransformerNode = (props) => (
  <BaseNode
    {...props}
    label="Transformer"
    showNameType={true}
    inputHandles={[{ id: 'input', position: '25%' }]}
    outputHandles={[{ id: 'output', position: '75%' }]}
  >
    <div>Transforms data</div>
  </BaseNode>
);
