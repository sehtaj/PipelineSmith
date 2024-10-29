// AggregatorNode.js
import BaseNode from '../baseNode';

export const AggregatorNode = (props) => (
  <BaseNode
    {...props}
    label="Aggregator"
    showNameType={false}
    inputHandles={[
      { id: 'input1', position: '20%' },
      { id: 'input2', position: '50%' },
      { id: 'input3', position: '80%' }
    ]}
    outputHandles={[{ id: 'output', position: '50%' }]}
  >
    <div>Aggregates inputs</div>
  </BaseNode>
);
