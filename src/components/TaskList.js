import React from 'react'
import Task from './Task'

function TaskList({loading, tasks, onPinTask, onArchiveTask}) {
    const events = {
        onPinTask,
        onArchiveTask
    }

    if (loading) {
        return <div className="list-itmes">Loading</div>
    }

    if (tasks.length===0) {
        return <div className="list-items">Empty</div>
    }

    return (
        <div className="list-items">
            {tasks.map( task => <Task key={task.id} task={task} {...events} />)}
        </div>
    )
}

export default TaskList