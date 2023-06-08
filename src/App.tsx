import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './static_tsx/tsx/navbar';
import Footer from './static_tsx/tsx/footer';
import AboutMe from './Personal_Info/about_me';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
 
    <div className="App text-white">
      <NavBar />
      <div className='main bg'>
          <AboutMe />
      <Footer />
      </div>
    </div>
  );
}

export default App;
