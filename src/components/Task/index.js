import React from 'react';
import './style.css';

const Task = props => (
  <label className="task">
    <input className="task__checkbox" type="checkbox" />
    <span className="task__icon"></span>
    <span className="task__text">{props.text}</span>
  </label>
)

export default Task;
