import { useContext } from 'react';

import { tasksContext } from '../../contexts/task.component';

const TaskList = () => {
  const { tasks } = useContext(tasksContext);

  return (
    <section>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h1>{task.text}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
