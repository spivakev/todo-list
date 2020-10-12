import React from 'react';
import Form from './components/Form'
import Form from './components/Task'
import Form from './components/TaskList'

class App extends React.Component {

  addTaskToList = (e) => {
    e.preventDefault();
    let newTask = e.target.elements.task.value;
    console.log(newTask);
  }

  render() {
    return (
      <div className="App">
        <TaskList />
        <Form addTask={this.addTaskToList} />
      </div>
    );
  }

}

export default App;

