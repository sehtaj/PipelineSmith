// TextNode.js
import BaseNode from './baseNode';

export const TextNode = (props) => (
  <BaseNode
    {...props}
    label="Text"
    showNameType={false}
    outputHandles={[{ id: 'output', position: '50%' }]}
  >
    <div>
      <label>
        Text:
        <input
          type="text"
          value={props.data?.text || '{{input}}'}
          onChange={(e) => props.setData({ text: e.target.value })}
        />
      </label>
    </div>
  </BaseNode>
);
