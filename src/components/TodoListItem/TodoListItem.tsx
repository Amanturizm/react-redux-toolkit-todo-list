import React from 'react';

interface Props {
  todo: ITodoListItem;
  onChecked: React.ChangeEventHandler;
}

const TodoListItem: React.FC<Props> = ({ todo, onChecked }) => {
  return (
    <div className="d-flex align-items-center justify-content-between border border-2 border-secondary rounded-3 py-2 px-3 fs-4">
      <div className="d-flex gap-3">
        <input
          type="checkbox"
          name="status"
          checked={todo.status}
          onChange={onChecked}
          className="form-check-input border border-1 border-secondary"
        />
        <h3>{todo.title}</h3>
      </div>
      <button className="btn btn-outline-danger">del</button>
    </div>
  );
};

export default TodoListItem;