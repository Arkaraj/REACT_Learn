import React from 'react';

const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'auto' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: 'toggle-todo', payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: 'delete-todo', payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}

export default Todo;
