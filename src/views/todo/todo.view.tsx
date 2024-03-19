import * as React from 'react'

import { TodoForm } from '../../components/todo-form'
import { TodoList } from '../../components/todo-list'
import { Dialog } from '../../components/dialog'
import { Counter } from '../../components/counter'
import { Empty } from '../../components/empty'
import { Pagination } from '../../components/pagination'
import { Loader } from '../../components/loader'
import { useTodo } from '../../hooks'

export const TodoView = (): React.ReactNode => {
  const {
    isFormOpen,
    isDialogOpen,
    counter,
    todos,
    todo,
    todoStatus,
    page,
    paginationData,
    loading,
    onSubmit,
    onCloseForm,
    onCloseDialog,
    onEdit,
    onDelete,
    onApprove,
    onTodoItem,
    onPageChange,
  } = useTodo()

  return loading ? 
    <Loader />
    : 
    <>
      <Counter compeled={counter?.completed} current={counter?.current} />
      {todos?.length === 0 ? 
        <Empty status={todoStatus} />
        : 
        <TodoList
          todos={todos}
          onTodoItem={onTodoItem}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      }
      <Pagination
        totalPages={paginationData?.totalPages}
        onPageChange={onPageChange}
        forcePage={page}
      />

      <TodoForm
        todo={todo}
        onSubmit={onSubmit}
        isFormOpen={isFormOpen}
        onCloseForm={onCloseForm}
      />
      <Dialog
        text="Do you want to delete Todo?"
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
        onApprove={onApprove}
        loading={loading}
      />
    </>
  
}
