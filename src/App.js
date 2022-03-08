import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Saturday from './Pages/Saturday';
import Sunday from './Pages/Sunday'; 

//router DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={ <Navbar />}>
          <Route path="/" element={ <Homepage />}/>
          <Route path="Homepage" element={ <Homepage />}/>
          <Route path="Saturday" element={ <Saturday />}/>
          <Route path="Sunday" element={ <Sunday />}/>
          </Route>
        </Routes>
      </BrowserRouter> 
      <Footer />
    </>
  );
}

export default App;
