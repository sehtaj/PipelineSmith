// LLMNode.js
import BaseNode from './baseNode';

export const LLMNode = (props) => (
  <BaseNode
    {...props}
    label="LLM"
    showNameType={false}
    inputHandles={[
      { id: 'system', position: '33%' },
      { id: 'prompt', position: '67%' },
    ]}
    outputHandles={[{ id: 'response', position: '50%' }]}
  >
    <div><span>This is an LLM.</span></div>
  </BaseNode>
);
