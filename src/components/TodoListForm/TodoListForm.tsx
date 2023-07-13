import React, { useState } from 'react';
import { useAppDispatch } from "../../app/hook";
import { fetchTodoList } from "../../container/TodoList/TodoListThunk";
import axiosApi from "../../axiosApi";

const TodoListForm = () => {
  const dispatch = useAppDispatch();

  const [todoValue, setTodoValue] = useState<string>('');

  const postTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.post('/todo-list.json', { title: todoValue, status: false });
      await dispatch(fetchTodoList());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={postTodo} className="d-flex gap-4 ">
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        className="form-control"
        placeholder="todo..."
      />
      <button className="btn btn-primary">add</button>
    </form>
  );
};

export default TodoListForm;