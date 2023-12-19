import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { createTask } from './redux/todoSlice';
import { getUser, getUserName } from './redux/userSlice';

// Redux Tutorial: https://react-redux.js.org/tutorials/quick-start
function App() {
  
  const userName = useSelector(state => getUserName(1)(state));

  console.log(userName);
  
  const [input, setInput] = useState('');
  const allTasks = useSelector(state => state.todo.list);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      createTask({ name: input })
    );
    setInput('')
  }
  return (
    <div className="App">
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleClick}>Create</button>

      <ul>
        {
          allTasks.map(task => <li key={task.id}>{task.name}</li>)
        }
      </ul>


    </div>
  );
}

export default App;
