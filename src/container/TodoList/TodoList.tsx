import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchTodoList } from "./TodoListThunk";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div>
      {
        todoList.map(todo => <div>{todo.title}</div>)
      }
    </div>
  );
};

export default TodoList;