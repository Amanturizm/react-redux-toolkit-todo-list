import React from 'react';

interface Props {
  todo: ITodoListItem;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="d-flex align-items-center justify-content-between border border-2 border-warning rounded-3 py-2 px-3 fs-4">
      <div className="d-flex gap-3">
        <input
          type="checkbox"
          name="status"
          checked={todo.status}
          onChange={() => {}}
          className="form-check-input"
        />
        <h3>{todo.title}</h3>
      </div>
      <button className="btn btn-outline-danger">del</button>
    </div>
  );
};

export default TodoListItem;