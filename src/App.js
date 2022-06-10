import Header from './components/Header/Header.component';
import NewTask from './components/NewTask/NewTask.component';
import TaskList from './components/TaskList/TaskList.component';

import Main from './App.styles';

function App() {
  return (
    <Main>
      <Header />
      <NewTask />
      <TaskList />
    </Main>
  );
}

export default App;
