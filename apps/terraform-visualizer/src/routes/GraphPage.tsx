import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTerraformPlan } from '@terraform-ui/api-client';
import { setPlan, RootState } from '@terraform-ui/state';
import { GraphRenderer } from '@terraform-ui/graph-renderer';
import { Node, Edge } from 'reactflow';
import { Server } from 'lucide-react'; // Example Icon

// A simple function to transform plan data into graph nodes/edges
const transformPlanToGraph = (plan: any) => {
  if (!plan?.data?.attributes?.['resource-changes']) {
    return { nodes: [], edges: [] };
  }

  const nodes: Node[] = plan.data.attributes['resource-changes'].map(
    (resource: any, index: number) => ({
      id: resource.address,
      position: { x: index * 250, y: 100 },
      data: { label: resource.address },
    })
  );

  // In a real scenario, you'd parse dependencies to create edges.
  const edges: Edge[] = [];

  return { nodes, edges };
};

export function GraphPage() {
  const dispatch = useDispatch();
  const { data: planData, isLoading } = useTerraformPlan('mock-plan-id');
  const { plan } = useSelector((state: RootState) => state.terraform);

  useEffect(() => {
    if (planData) {
      dispatch(setPlan(planData));
    }
  }, [planData, dispatch]);

  const { nodes, edges } = useMemo(() => transformPlanToGraph(plan), [plan]);

  if (isLoading) {
    return <div>Loading Terraform Plan...</div>;
  }

  return (
    <div style={{ height: 'calc(100vh - 100px)' }}>
      <GraphRenderer nodes={nodes} edges={edges} />
    </div>
  );
}

export default GraphPage;
