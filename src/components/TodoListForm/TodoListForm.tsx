import React, { useState } from 'react';
import { useAppDispatch } from "../../app/hook";
import { fetchTodoList, postTodo } from "../../container/TodoList/TodoListThunk";

const TodoListForm = () => {
  const dispatch = useAppDispatch();

  const [todoValue, setTodoValue] = useState<string>('');

  const sendNewTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todoValue.length > 1) {
      await dispatch(postTodo({ newTodo: { title: todoValue, status: false } }));
      await dispatch(fetchTodoList());
      setTodoValue('');
    } else {
      alert('Введите задачу!');
    }
  }

  return (
    <form onSubmit={sendNewTodo} className="d-flex gap-4 ">
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