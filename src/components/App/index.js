import React from 'react';
import Form from '../Form'
import TaskList from '../TaskList'
import prevtasks from '../../prevtasks'

class App extends React.Component {

  state = {
    taskList: prevtasks
  }

  addTaskToList = (e) => {
    e.preventDefault();
    let newTaskText = e.target.elements.task.value;
    console.log(newTaskText);

    let newTask = {
      id: Date.now(),
      "text": newTaskText,
      "done": false
    }

    this.setState({
      taskList: this.state.taskList.concat(newTask)
    })

    e.target.elements.task.value = "";
  }


  render() {
    return (
      <div className="App">
        <TaskList tasks={this.state.taskList} />
        <br />
        <br />
        <Form addTask={this.addTaskToList} />
      </div>
    );
  }

}

export default App;

