import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Saturday from './Pages/Saturday';
import Sunday from './Pages/Sunday'; 
import './Styles/Styles.css';

//router DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/ReactJS" element={ <Navbar />}>
          <Route index element={ <Homepage />}/>
          {/* <Route path="/ReactJS" element={ <Homepage />}/> */}
           <Route path="/ReactJS" element={ <Homepage />}/> 
          <Route path="/ReactJS/Saturday" element={ <Saturday />}/>
          <Route path="/ReactJS/Sunday" element={ <Sunday />}/>
          </Route>
        </Routes>
       
      <Footer />
    </>
  );
}

export default App;
