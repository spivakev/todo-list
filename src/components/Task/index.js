import React from 'react';
import { render } from '@testing-library/react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.taskText
    }

  }

  render() {
    return (
      <li>{}</li>
    )
  }
}

export default Task;