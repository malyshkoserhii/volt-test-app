// import { useState } from 'react';

import { Layout } from './components/layout';
import { TodoView } from './views/todo/todo.view';

export const App = () => {
  return (
    <Layout>
      <p>Hello Todo App!</p>
      <TodoView />
    </Layout>
  );
};
