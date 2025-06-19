import styles from './graph-renderer.module.css';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

export function TerraformUiGraphRenderer() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TerraformUiGraphRenderer!</h1>
    </div>
  );
}

export default TerraformUiGraphRenderer;

interface GraphRendererProps {
  nodes: Node[];
  edges: Edge[];
}

export function GraphRenderer({ nodes, edges }: GraphRendererProps) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
