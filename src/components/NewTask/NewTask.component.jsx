import { useContext, useState } from 'react';

import { tasksContext } from '../../contexts/task.component';

import { CheckCircle, TaskContainer, TodoText } from './NewTask.styles';

const NewTask = () => {
  const { tasks, setTasks } = useContext(tasksContext);
  const [text, setText] = useState('Create a new todo...');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(tasks);

    const newTasks = [...tasks];

    newTasks.push({
      id: newTasks.length + 1,
      text,
      done: false,
    });

    setTasks(newTasks);
    setText('');
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const clickHandler = (e) => {
    if (e.target.value === 'Create a new todo...') {
      e.target.value = '';
    }
  };

  return (
    <TaskContainer>
      <CheckCircle></CheckCircle>
      <form action="POST" style={{ width: '100%' }} onSubmit={submitHandler}>
        <TodoText
          type="text"
          value={text}
          onChange={changeHandler}
          onClick={clickHandler}
        />
      </form>
    </TaskContainer>
  );
};

export default NewTask;
