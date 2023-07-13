import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {changeStatus, fetchTodoList} from "../../container/TodoList/TodoListThunk";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoListItemsBuilder = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const changeStatusDispatch = async (todo: ITodoListItem, index: number) => {
    await dispatch(changeStatus({ id: todo.id || '', index }));
    await dispatch(fetchTodoList());
  };

  return (
    <div className="d-flex flex-column gap-2">
      {
        todoList.map((todo, index) => (
          <TodoListItem
            todo={todo}
            onChecked={() => changeStatusDispatch(todo, index)}
            key={`todo-${todo.id}`}
          />
        ))
      }
    </div>
  );
};

export default TodoListItemsBuilder;