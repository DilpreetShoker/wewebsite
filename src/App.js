import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Home'
import AboutUs from './components/AboutUs';
import Sponsors from './components/Sponsors';
import SocInNo from './components/SocInNo';
import Events from './components/Events';
import Calendar from './components/Calendar';
import Research from './components/Research';
import JoinUs from './components/JoinUs';
import Team from './components/team';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
      <Navbar />
      <Hero />
      <div id= 'aboutUs'>
        <AboutUs />
        <SocInNo />
      </div>
      <Events />
      <Calendar />
      <Research />
      <Team />
      <JoinUs />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
