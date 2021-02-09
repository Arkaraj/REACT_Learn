import React, { useState } from 'react';

const AddTask = ({ add }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Enter the Title plese')
            return
        }

        add({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <div>
            <form className='add-form' onSubmit={submit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input
                        type='text'
                        placeholder='Add Task'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Day & Time</label>
                    <input
                        type='text'
                        placeholder='Add Day & Time'
                        value={day}
                        onChange={e => setDay(e.target.value)}
                    />
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input
                        type='checkbox'
                        checked={reminder}
                        value={reminder}
                        onChange={() => setReminder(!reminder)} // e.currentTarget.checked
                    />
                </div>

                <input type='submit' value='Save Task' className='btn btn-block' />
            </form>
        </div>
    );
}

export default AddTask;
