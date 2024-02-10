import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const username='Pratik'
  const os = ''
  return (
    <>
      <h1>Tailwind</h1>
      <Card username={username} os={os}/>
    </>
  );
}

export default App
