import Services from './components/Services/Services';
import './App.css';
import AboutUs from './components/About_us/AboutUs';
// import HomePage from './components/HomePage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA_component/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <Testimonials />
      <CTA />
      <Footer/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
