// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />


                {/* New nodes */}
                <DraggableNode type='aggregator' label='Aggregator' />
                <DraggableNode type='branch' label='Branch' />
                <DraggableNode type='display' label='Display' />
                <DraggableNode type='inputCollector' label='Input Collector' />
                <DraggableNode type='transformer' label='Transformer' />
            </div>
        </div>
    );
};
