import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './Recoil/TodoList';


function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <TodoList/>
      </RecoilRoot>
    </div>
  );
}

export default App;
