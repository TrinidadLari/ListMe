

import { useState } from 'react';

import { DarkMode } from './components/DarkMode';




import './App.css'


function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <DarkMode onAddTask={handleAddTask} tasks={tasks} />
    </>
  )
}

export default App
