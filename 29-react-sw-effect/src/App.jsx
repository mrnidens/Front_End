import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import { navItems } from './utils/constants';

function App() {

  const [page, setPage] = useState(navItems[0]);
  return (
    <div className="container-fluid">
      <Header changePage={setPage} />
      <Main page = {page} />
      <Footer />
    </div>
  );
}

export default App;
