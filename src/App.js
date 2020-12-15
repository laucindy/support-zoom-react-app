import './App.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Header, Footer, About, Contact, Home, Profile, Settings, Users } from './components'

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
