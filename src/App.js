import React from 'react';
import './App.css';
import { Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import StatusDisplay from './components/StatusDisplay';
import CoinToss from './components/CoinToss';
import Home from './components/Home';
import WishingWell from './components/WishingWell';
import Blackjack from './components/Blackjack';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="column">
            <div id="header-bar"> 
              <h1>Casin</h1>
              <StatusDisplay />
            </div>
            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <NavLink to="/cointoss" className="nav-link" activeClassName="nav-link-active">M&uuml;nzwurf</NavLink>
              <NavLink to="/blackjack" className="nav-link" activeClassName="nav-link-active">Blackjack</NavLink>
              <NavLink to="/wishingwell" className="nav-link" activeClassName="nav-link-active">Wunschbrunnen</NavLink>
            </nav>
          </div>
        </header>
        <main className="column">
          <Route path="/" exact component={Home} />
          <Route path="/cointoss" exact component={CoinToss} />
          <Route path="/blackjack" exact component={Blackjack} />
          <Route path="/wishingwell" exact component={WishingWell} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
