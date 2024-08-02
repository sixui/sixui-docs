import { createLazyFileRoute } from '@tanstack/react-router';

export const Index: React.FC = () => {
  return <div className='p-2'>Welcome Home!</div>;
};

export const Route = createLazyFileRoute('/')({
  component: Index,
});
