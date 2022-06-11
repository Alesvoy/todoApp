import { useState, useContext } from 'react';

import { tasksContext } from '../../contexts/task.component';

import { Icon, TaskContainer, CheckCircle, Text } from './Task.styles';
import moonIcon from '../../assets/icon-cross.svg';
import checkIcon from '../../assets/icon-check.svg';

const Task = ({ text, id, done }) => {
  const { tasks, setTasks } = useContext(tasksContext);

  const completeHandler = () => {
    const [currentTask] = tasks.filter((task) => task.id === id);

    currentTask.done = !currentTask.done;

    const newTasks = tasks.filter((task) => task.id !== currentTask.id);

    const updatedTasks = [...newTasks, currentTask];

    setTasks(updatedTasks);
  };

  const removeHandler = () => {
    const [currentTask] = tasks.filter((task) => task.id === id);

    const newTasks = tasks.filter((task) => task.id !== currentTask.id);

    setTasks(newTasks);
  };

  return (
    <TaskContainer>
      {done === true ? (
        <CheckCircle onClick={completeHandler} done={done}>
          <img src={checkIcon} alt="check icon" />
        </CheckCircle>
      ) : (
        <CheckCircle onClick={completeHandler} done={done}></CheckCircle>
      )}

      <Text done={done}>{text}</Text>
      <Icon onClick={removeHandler}>
        <img src={moonIcon} alt="cross icon" />
      </Icon>
    </TaskContainer>
  );
};

export default Task;
