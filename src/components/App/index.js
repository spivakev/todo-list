import React from 'react';
import Form from '../Form'
import TaskList from '../TaskList'
import prevtasks from '../../prevtasks'
import './style.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import DeleteIcon from '../../icons/DeleteIcon'

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
      <div className="app app__wrapper">
        <div className="todo-list">
          <div className="todo-list__container card">
            <div className="todo-list__header card-header">
              <span className="todo-list__title">TODO list</span>
              <div className="todo-list__btn--delete">
                <DeleteIcon />
              </div>
            </div>

            <div className="todo-list__body">
              <div className="todo-list__task-list">
                <TaskList tasks={this.state.taskList} />
              </div>
              <div className="todo-list__input" >
                <Form addTask={this.addTaskToList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

