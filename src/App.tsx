import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './static_tsx/tsx/navbar';
import Footer from './static_tsx/tsx/footer';
import AboutMe from './Personal_Info/about_me';
function App() {
  return (
 
    <div className="App">
      <NavBar />
      <div className='main'>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
