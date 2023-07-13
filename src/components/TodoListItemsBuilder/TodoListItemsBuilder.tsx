import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {changeStatus, deleteTodo, fetchTodoList} from "../../container/TodoList/TodoListThunk";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoListItemsBuilder = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const changeStatusDispatch = async (id: string, index: number) => {
    await dispatch(changeStatus({ id, index }));
    await dispatch(fetchTodoList());
  };

  const deleteDispatch = async (id: string) => {
    await dispatch(deleteTodo({ id }));
    await dispatch(fetchTodoList());
  };

  return (
    <div className="d-flex flex-column gap-2">
      {
        todoList.map((todo, index) => (
          <TodoListItem
            todo={todo}
            onChecked={() => changeStatusDispatch(todo.id || '', index)}
            onDelete={() => deleteDispatch(todo.id || '')}
            key={`todo-${todo.id}`}
          />
        ))
      }
    </div>
  );
};

export default TodoListItemsBuilder;