import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'
import { navItems } from './utils/constants'
import { StarWarsProvider } from './utils/context'

function App() {

  const [page, setPage] = useState(navItems[0])

  return (
    <StarWarsProvider>
    <div className="container-fluid">
      <Header changePage={setPage} />
      <Main page={page} />
      <Footer />
    </div>
    </StarWarsProvider>
  )
}

export default App
