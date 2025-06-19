import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const apiClient = axios.create({
  baseURL: 'https://app.terraform.io/api/v2', // Replace with your TFE server
  headers: {
    // This is where you would typically handle authorization.
    // For this demo, we'll use mock data.
    // 'Authorization': `Bearer ${process.env.TFE_TOKEN}`,
    'Content-Type': 'application/vnd.api+json',
  },
});

// Mock data to simulate a Terraform plan
const mockPlan = {
  data: {
    attributes: {
      'resource-changes': [
        { 'address': 'aws_instance.web', 'type': 'aws_instance', 'change': { 'actions': ['create'] } },
        { 'address': 'aws_s3_bucket.data', 'type': 'aws_s3_bucket', 'change': { 'actions': ['create'] } },
        { 'address': 'null_resource.wait', 'type': 'null_resource', 'change': { 'actions': ['create'] } }
      ],
    },
  },
};

export const useTerraformPlan = (planId: string) => {
  return useQuery({
    queryKey: ['plan', planId],
    queryFn: async () => {
      // In a real app, you'd fetch from the API:
      // const { data } = await apiClient.get(`/plans/${planId}`);
      // return data;

      // For this demo, we return mock data after a short delay.
      return new Promise(resolve => setTimeout(() => resolve(mockPlan), 1000));
    }
  });
};
