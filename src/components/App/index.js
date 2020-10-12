import React from 'react';
import Form from '../Form'
import TaskList from '../TaskList'
import taskList from '../../prevtasks'

class App extends React.Component {

  addTaskToList = (e) => {
    e.preventDefault();
    let newTask = e.target.elements.task.value;
    console.log(newTask);
  }

  // taskList = taskList.slice()

  render() {
    return (
      <div className="App">
        <TaskList tasks={taskList} />
        <br />
        <br />
        <Form addTask={this.addTaskToList} />
      </div>
    );
  }

}

export default App;

