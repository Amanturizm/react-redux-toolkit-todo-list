import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { changeStatus, deleteTodo, fetchTodoList } from "../../container/TodoList/TodoListThunk";
import TodoListItem from "../TodoListItem/TodoListItem";
import Preloader from "../Preloader/Preloader";
import {addCurrentTodoId} from "../../container/TodoList/TodoListSlice";

const TodoListItemsBuilder = () => {
  const dispatch = useAppDispatch();
  const { todoList, todoListLoading } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const changeStatusDispatch = async (id: string, index: number) => {
    await dispatch(changeStatus({ id, index }));
    await dispatch(fetchTodoList());
  };

  const deleteDispatch = async (id: string) => {
    await dispatch(addCurrentTodoId(id));
    await dispatch(deleteTodo({ id }));
    await dispatch(fetchTodoList());
  };

  let content: React.ReactNode = <Preloader />;

  if (!todoListLoading) {
    content = todoList.map((todo, index) => (
      <TodoListItem
        todo={todo}
        onChecked={() => changeStatusDispatch(todo.id || '', index)}
        onDelete={() => deleteDispatch(todo.id || '')}
        key={`todo-${todo.id}`}
      />
    ));
  }

  return (
    <div className="d-flex flex-column gap-2">
      {content}
    </div>
  );
};

export default TodoListItemsBuilder;