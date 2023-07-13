import React from 'react';
import { useAppSelector } from "../../app/hook";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface Props {
  todo: ITodoListItem;
  onChecked: React.ChangeEventHandler;
  onDelete: React.MouseEventHandler;
}

const TodoListItem: React.FC<Props> = ({ todo, onChecked, onDelete }) => {
  const { currentTodoId } = useAppSelector((state) => state.todoList);
  const isLoading = currentTodoId === todo.id;

  return (
    <div className="d-flex align-items-center justify-content-between border border-2 border-secondary rounded-3 py-2 px-3 fs-4">
      <div className="d-flex gap-3">
        <input
          type="checkbox"
          name="status"
          checked={todo.status}
          onChange={onChecked}
          style={{ cursor: 'pointer' }}
          className="form-check-input border border-1 border-secondary"
        />
        <h3>{todo.title}</h3>
      </div>
      <button onClick={onDelete} className="btn btn-outline-danger" disabled={isLoading}>
        { isLoading ? <ButtonSpinner /> : null }Del
      </button>
    </div>
  );
};

export default TodoListItem;