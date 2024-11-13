from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

# Allow CORS for the frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://pipeline-smith.vercel.app","http://localhost:3000"],  # Update with your frontend URL if different
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods, including OPTIONS
    allow_headers=["*"],
)

# Define the data structure for nodes and edges
class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}
@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Handle empty nodes or edges
    if num_nodes == 0 and num_edges == 0:
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': True,
            'message': 'No nodes or edges provided.'
        }
    elif num_nodes == 0:
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': True,
            'message': 'No nodes provided, but edges are ignored.'
        }
    elif num_edges == 0:
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': True,
            'message': 'No edges provided, but nodes exist.'
        }

    # Create a directed graph and add nodes and edges
    G = nx.DiGraph()
    G.add_nodes_from(node['id'] for node in pipeline.nodes)
    G.add_edges_from((edge['source'], edge['target']) for edge in pipeline.edges)
    
    # Determine if the graph is a Directed Acyclic Graph (DAG)
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag,
        'message': 'Pipeline parsed successfully.'
    }
