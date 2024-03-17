import { Layout } from './components/layout';
import { TodoView } from './views/todo/todo.view';

export const App = () => {
  return (
    <Layout>
      <TodoView />
    </Layout>
  );
};
