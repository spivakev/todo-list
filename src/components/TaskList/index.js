import React from 'react';
import Task from '../Task';

class TaskList extends React.Component {

  render() {
    const allTasks = this.props.tasks.map(task =>
      <li className="task-list__li" key={task.id}>
        <Task text={task.text}
        />
      </li>
    )

    return (allTasks)
  }
}

export default TaskList;