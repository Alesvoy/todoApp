import { useContext } from 'react';

import { tasksContext } from '../../contexts/task.component';
import Task from '../Task/Task.component';

import { List, Footer } from './TaskList.styles';

const TaskList = () => {
  const { tasks } = useContext(tasksContext);

  return (
    <List>
      {tasks.map((task) => {
        return (
          <Task key={task.id} text={task.text} id={task.id} done={task.done} />
        );
      })}
      {tasks.length !== 0 ? (
        <Footer>
          <p>{tasks.filter((task) => task.done === false).length} items left</p>
          <p>Clear Completed</p>
        </Footer>
      ) : (
        ''
      )}
    </List>
  );
};

export default TaskList;
