import './App.css';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
       <Routes>
            <Route path='contact' element={<Contact />} />
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
