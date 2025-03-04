  
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul  className = "list-group">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;