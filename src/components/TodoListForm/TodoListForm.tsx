import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import { fetchTodoList, postTodo } from "../../container/TodoList/TodoListThunk";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const TodoListForm = () => {
  const dispatch = useAppDispatch();
  const { addButtonLoading } = useAppSelector((state) => state.todoList);

  const [todoValue, setTodoValue] = useState<string>('');

  const sendNewTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todoValue.length > 1) {
      await dispatch(postTodo({ newTodo: { title: todoValue, status: false } }));
      setTodoValue('');
      await dispatch(fetchTodoList());
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
      <button className="btn btn-primary d-flex align-items-center" disabled={addButtonLoading}>
        {addButtonLoading ? <ButtonSpinner /> : null} Add
      </button>
    </form>
  );
};

export default TodoListForm;