import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
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
            <aside className='navigation'>
              {<Navigation />}
            </aside>
            <main className='importPreview'>
              <header className='upper'>
                <section className='middle'>
                  <div className='loadAndSave'>
                    {<LoadAndSave />}
                  </div>
                  <div className='fileFormat'>
                    {<FileFormat />}
                  </div>
                </section>
                <aside className='right'>
                  <div className='account'>
                    {<Account />}
                  </div>
                  <div className='miscellaneous'>
                    {<Miscellaneous />}
                  </div>
                </aside>
              </header>
              <div className='infoPreview'>
                <div className='information'>
                  {<Information />}
                </div>
                <footer className='footer'>
                  {<Footer />}
                </footer>
              </div>
            </main>
          </main>


        </>
      </Router>
    );
  }
}

export default App;



