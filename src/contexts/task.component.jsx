import { createContext, useState } from 'react';

export const tasksContext = createContext({
  tasks: [
    {
      id: 1,
      text: 'Clean room',
      done: false,
    },
  ],
});

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const value = { tasks, setTasks };

  return (
    <tasksContext.Provider value={value}>{children}</tasksContext.Provider>
  );
};
