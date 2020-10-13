import React from 'react';
import Form from '../Form'
import TaskList from '../TaskList'
import prevtasks from '../../prevtasks'
import './style.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {

  state = {
    taskList: prevtasks
  }

  addTaskToList = (e) => {
    e.preventDefault();
    let newTaskText = e.target.elements.task.value;
    console.log(`Текст новой задачи: ${newTaskText}`);

    if (newTaskText !== "") {
      let newTask = {
        id: Date.now(),
        "text": newTaskText,
        "done": false
      }

      this.setState({
        taskList: this.state.taskList.concat(newTask)
      })

      e.target.elements.task.value = "";
    } else {
      console.log("(!) Попытка добавить пустую задачу")
    }
  }


  render() {
    return (
      <div className="app">
        <TaskList tasks={this.state.taskList} />
        <br />
        <br />
        <Form addTask={this.addTaskToList} />
      </div>
    );
  }

}

export default App;

