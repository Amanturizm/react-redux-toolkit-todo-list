import React from 'react';
import TodoListForm from "../../components/TodoListForm/TodoListForm";
import TodoListItemsBuilder from "../../components/TodoListItemsBuilder/TodoListItemsBuilder";

const TodoList = () => {
  return (
    <div className="d-flex flex-column gap-4 w-25 mx-auto mt-5">
      <TodoListForm />
      <TodoListItemsBuilder />
    </div>
  );
};

export default TodoList;