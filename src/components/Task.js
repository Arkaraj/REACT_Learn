import React from 'react';
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h1>{task.title} <FaTimes style={{ color: 'red', cursor: 'pointer', float: 'right' }} onClick={() => onDelete(task.id)} /></h1>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
