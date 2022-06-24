import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
import Import from './Import';
import LoadAndSave from './LoadAndSave';
import FileFormat from './FileFormat';
import Account from './Account';
import Miscellaneous from './Miscellaneous';
import Information from './Information';
import Footer from './Footer';


class App extends Component {

  render() {
    return (
      <Router>
        <>
          <main className='app'>
            <aside>
              {<Navigation />}
            </aside>
            <section className='importPreview'>
              <section className='middle'>
                {<Import />}
                <div>
                  {<LoadAndSave />}
                </div>
                <div>
                  {<FileFormat />}
                </div>
              </section>
              <aside className='right'>
                <div>
                  {<Account />}
                </div>
                <div>
                  {<Miscellaneous />}
                </div>
              </aside>
            </section>
            <div className='Information'>
              {<Information />}
            </div>
            <footer>
              {<Footer />}
            </footer>
          </main>
        </>
      </Router>
    );
  }
}

export default App;



