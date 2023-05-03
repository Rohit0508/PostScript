import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="App">

    </div>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
