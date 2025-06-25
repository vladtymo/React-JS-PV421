import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'

const TASKS = [
  { title: 'First task', important: false, complete: false, date: '01.04.2023' },
  { title: 'Second task', important: false, complete: false, date: '01.04.2023' },
  { title: 'Third task', important: true, complete: true },
  { title: 'Fourth task', important: true, complete: false, date: '01.04.2023' },
  { title: 'Fifth task', important: false, complete: false },
  { title: 'Sixth task', important: true, complete: false },
  { title: 'Seventh task', important: true, complete: true },
  { title: 'Eighth task', important: false, complete: true }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React</h1>
      <hr />
      <ToDoList tasks={TASKS} />
    </>
  )
}

export default App
