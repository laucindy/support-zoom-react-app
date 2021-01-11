import './App.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Header, Footer, About, Contact, Home, NewPost, Profile, Settings, Users } from './components'
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';


function App() {
  return (
    <Router>
      <AppProvider i18n={enTranslations}>
        <div>
          <Header />

          <div className="app">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/newpost" component={NewPost} />
              <Route path="/polaris" component={NewPost} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>

          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
