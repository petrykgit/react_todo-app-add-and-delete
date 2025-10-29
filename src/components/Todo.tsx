import React from 'react';
import { Todo } from '../types/Todo';
import { Loader } from './Loader';

interface TodoItemProps {
  todo: Todo;
  isLoading: boolean;
  isDeleting: boolean;
  onDelete: (todoId: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isLoading,
  isDeleting,
  onDelete,
}) => {
  const showLoader = isLoading || isDeleting;

  return (
    <div
      data-cy="Todo"
      className={`todo ${todo.completed ? 'completed' : ''}`}
      key={todo.id}
    >
      <label className="todo__status-label" htmlFor={`todo-status-${todo.id}`}>
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          id={`todo-status-${todo.id}`}
          aria-label={`Mark "${todo.title}" as ${todo.completed ? 'active' : 'completed'}`}
          disabled={showLoader}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => onDelete(todo.id)}
        disabled={showLoader}
      >
        ×
      </button>

      {showLoader && <Loader />}
    </div>
  );
};
