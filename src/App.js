import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
