import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomeSecond from './Components/SecondPart/HomeSecond';
import HomeThirdPart from './Components/ThirdPart/HomeThirdPart';

function App() {
  return (
    <div>
      <Navbar/>
      <HomeSecond></HomeSecond>
      <HomeThirdPart/>
      <Footer/>
    </div>
  );
}

export default App;
