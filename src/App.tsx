import * as React from 'react'

import { Layout } from './components/layout'
import { TodoView } from './views/todo/todo.view'

export const App = (): React.ReactNode => {
  return (
    <Layout>
      <TodoView />
    </Layout>
  )
}
