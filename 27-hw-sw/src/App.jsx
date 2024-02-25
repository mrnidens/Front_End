import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './assets/main.jpg';
import friendImage1 from './assets/friend1.jpg';
import friendImage2 from './assets/friend2.jpg';
import friendImage3 from './assets/friend3.jpg';
import friendImage4 from './assets/friend4.jpg';
import friendImage5 from './assets/friend5.jpg';
import friendImage6 from './assets/friend6.jpg';
import friendImage7 from './assets/friend7.jpg';
import friendImage8 from './assets/friend8.jpg';
import friendImage9 from './assets/friend9.jpg';

import './App.css';
import './index.css';



function App() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <header>
        <nav className="fixed-top">
          <ul className="nav ms-5">
            <li className="nav-item btn btn-danger mx-1">Home</li>
            <li className="nav-item btn btn-danger mx-1">About Me</li>
            <li className="nav-item btn btn-danger mx-1">Star Wars</li>
            <li className="nav-item btn btn-danger mx-1">Contact</li>
          </ul>
        </nav>
        <h1 className="text-center py-4">Luke Skywalker</h1>
      </header>

      {/* Main Content */}
      <main className="clearfix">
        <section className="float-start w-25 me-3">
          <img className="w-100" src={mainImage} alt="Hero" />
        </section>

        <section className="float-end w-50 row border mx-1">
          <h2 className="col-12 text-center">Dream Team</h2>
          <img className="col-4 p-1" src={friendImage1} alt="Friend 1" />
          <img className="col-4 p-1" src={friendImage2} alt="Friend 2" />
          <img className="col-4 p-1" src={friendImage3} alt="Friend 3" />
          <img className="col-4 p-1" src={friendImage4} alt="Friend 4" />
          <img className="col-4 p-1" src={friendImage5} alt="Friend 5" />
          <img className="col-4 p-1" src={friendImage6} alt="Friend 6" />
          <img className="col-4 p-1" src={friendImage7} alt="Friend 7" />
          <img className="col-4 p-1" src={friendImage8} alt="Friend 8" />
          <img className="col-4 p-1" src={friendImage9} alt="Friend 9" />

        </section>

        <p className="far_galaxy">
          It is a period of civil war.
          Rebel spaceships, striking
          from a hidden base, have won
          their first victory against
          the evil Galactic Empire.

          During the battle, Rebel
          spies managed to steal secret
          plans to the Empire's
          ultimate weapon, the DEATH
          STAR, an armored space
          station with enough power
          to destroy an entire planet.

          Pursued by the Empire's
          sinister agents, Princess
          Leia races home aboard her
          starship, custodian of the
          stolen plans that can save her
          people and restore
          freedom to the galaxy....
        </p>
      </main>

      {/* Footer */}
      <footer className="row align-items-center">
        <div className="btn btn-danger col-2 offset-5 px-1">
          <p className="text-center m-0 g-0">Send me an <span className="email text-uppercase">email</span></p>
        </div>
      </footer>
    </div>
  );
};

export default App;