import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'
import { navItems } from './utils/constants'
import { SWContext } from './utils/context'

function App() {

  const [page, setPage] = useState(navItems[0])

  return (
    <div className="container-fluid">
      <SWContext.Provider value = {{
        changePage:setPage
      }}>
      <Header />
      </SWContext.Provider>
      <Main page={page} />
      <Footer />
    </div>
  )
}

export default App
