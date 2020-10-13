import React from 'react';
import PlusIcon from "../../icons/PlusIcon"
import './style.css';

const Form = props => (
  <div>
    <form className="form" onSubmit={props.addTask}>
      <button className="form__btn"><PlusIcon/></button>
      <input className="form__input" type="text" name="task" placeholder="Текст новой задачи" />
    </form>
  </div>
)

export default Form;