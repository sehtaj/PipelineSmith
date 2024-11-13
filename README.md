# PipelineSmith

Welcome to **PipelineSmith**! This project combines a JavaScript/React frontend with a Python/FastAPI backend, designed to create and manage visual node-based pipelines. **PipelineSmith** allows users to build and interact with customizable pipelines through node abstractions, adjustable styling, dynamic text node behavior, and backend integration for processing and validation.

## Project Overview

**PipelineSmith** provides a flexible and efficient way to create node-based pipelines, offering reusable abstractions for nodes, customizable styling, and backend validation to assess pipeline structure. With a focus on craftsmanship, **PipelineSmith** makes it easy to create robust, interconnected data workflows.

## Features

### 1. Node Abstraction  
**PipelineSmith** includes a system for easily creating reusable, customizable nodes. This abstraction allows for:
- Adding new node types without duplicating code.
- Applying consistent styles across all nodes.
- Showcasing flexibility through five custom nodes created using the abstraction.

### 2. Styling  
The project includes a unified and appealing design for all components. Custom styling has been applied to ensure a visually cohesive user experience, using a design that is both attractive and consistent. Various styling libraries, such as Material UI and Tailwind CSS, were incorporated.

### 3. Text Node Logic  
The text nodes in **PipelineSmith** include enhanced functionality:
- **Responsive Resizing**: The text node resizes based on input, dynamically adjusting its width and height to improve text visibility.
- **Variable Detection**: Detects variables in double curly brackets (e.g., `{{variable}}`), creating corresponding input handles on the node for each variable.

### 4. Backend Integration  
**PipelineSmith** is integrated with a Python/FastAPI backend to provide real-time validation of the pipeline:
- The frontend sends pipeline data (nodes and edges) to the backend’s `/pipelines/parse` endpoint.
- The backend calculates the number of nodes and edges and checks if the pipeline forms a Directed Acyclic Graph (DAG).
- The frontend displays an alert with the validation results, including the node count, edge count, and whether the pipeline is a DAG.

## Getting Started

### Prerequisites

- **Node.js** and **npm** for the frontend
- **Python** and **FastAPI** for the backend

### Installation

#### Frontend Setup
1. Navigate to the `/frontend` directory.
2. Install the dependencies:
   ```bash
   npm install
3. Start the frontend server:
    ```bash
    npm start


#### Backend Setup
1. Navigate to the `/backend` directory.
2. Install the necessary Python packages:
   ```bash
   pip install -r requirements.txt
3. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload

## Usage

- **Create and Modify Nodes**: Use the abstraction to add or modify nodes in the pipeline.
- **Customize Text Nodes**: Type within text nodes to see them resize and detect any variables added within double curly brackets (e.g., `{{variable}}`).
- **Submit Pipeline**: Click the "Submit" button to send the pipeline data to the backend.
- **View Results**: After submitting, an alert will display the number of nodes, the number of edges, and whether the pipeline forms a Directed Acyclic Graph (DAG).

