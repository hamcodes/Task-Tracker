import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Practice React',
      day: 'March 7th at 7:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn Algorithms',
      day: 'March 8th at 7:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Study Data Structures',
      day: 'March 9th at 7:00am',
      reminder: false,
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
