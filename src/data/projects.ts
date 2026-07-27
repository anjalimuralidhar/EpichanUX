export interface Project {
  id: string;
  name: string;
  owner: string;
  status: 'On track' | 'At risk' | 'Delayed';
  progress: number;
  tasks: number;
}

export const projects: Project[] = [
  { id: 'p-01', name: 'Mobile Redesign', owner: 'Maria Chen', status: 'On track', progress: 72, tasks: 34 },
  { id: 'p-02', name: 'Billing Migration', owner: 'Alex Kim', status: 'At risk', progress: 41, tasks: 28 },
  { id: 'p-03', name: 'Onboarding Revamp', owner: 'Jordan Lee', status: 'On track', progress: 88, tasks: 19 },
  { id: 'p-04', name: 'Search Relevance', owner: 'Priya Sharma', status: 'Delayed', progress: 23, tasks: 41 },
  { id: 'p-05', name: 'Reporting v2', owner: 'Maria Chen', status: 'On track', progress: 60, tasks: 22 },
];
