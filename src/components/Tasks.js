import React from 'react';
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // Note JSX always returns () in this brackets 😢 lost 10 mins for that
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    );
}

export default Tasks;
