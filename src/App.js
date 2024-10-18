import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home';
import Partners from './components/partners'
import About from './components/about'
import Numbers from './components/numbers'
import Projects  from './components/projects'
import Services from'./components/services'
import Footer from './components/footer'



function App() {
  return (
    <div className="App" id="Home">
      <Navbar/>
      <Home/>
      <Partners/>
      <About/>
      <Numbers/>
      <Projects/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
