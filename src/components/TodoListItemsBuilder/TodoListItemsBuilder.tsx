import React, {useEffect} from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchTodoList} from "../../container/TodoList/TodoListThunk";

const TodoListItemsBuilder = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div className="w-25 mx-auto mt-5">
      {
        todoList.map(todo => (
          <TodoListItem todo={todo} key={`todo-${todo.id}`} />
        ))
      }
    </div>
  );
};

export default TodoListItemsBuilder;