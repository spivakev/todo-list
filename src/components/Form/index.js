import React from 'react';

const Form = props => (
  <div>
    <form className="form" onSubmit={props.addTask}>
      <button className="form__btn">+</button>
      <input className="form__input" type="text" name="task" placeholder="Текст новой задачи" />
    </form>
  </div>
)

export default Form;