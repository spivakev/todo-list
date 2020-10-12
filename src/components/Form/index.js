import React from 'react';

const Form = props => (
  <div>
    <form onSubmit={props.addTask}>
      <button>+</button>
      <input type="text" name="task" placeholder="Текст новой задачи" />
    </form>
  </div>
)

export default Form;