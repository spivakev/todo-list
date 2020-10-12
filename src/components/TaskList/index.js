import React from 'react';

class TaskList extends React.Component {

  render() {
    const allTasks = this.props.tasks.map(article =>
      <li>
        <Task task={task}
        />
      </li>
    )

    return (allTasks)
  }
}