import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react';
import { defaultHero } from './utils/constants';
import { SWContext } from './utils/context';


function App() {
  const [hero, setHero] = useState(defaultHero);



  return (
    <div className="container-fluid">
      <SWContext.Provider value={
        {hero, changeHero: setHero}
      }>
      <Header  />
      <Main />
      </SWContext.Provider>
      <Footer />
    </div>
  )
}

export default App
