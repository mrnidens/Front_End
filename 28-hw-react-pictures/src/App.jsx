import { useState } from 'react'
import DreamTeam from './components/DreamTeam';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="clearfix">
        <DreamTeam />
    </main>
)
}

export default App
