import './App.css';
import Profile from './components/Profile'
import Menu from './components/Menu'
import Links from './components/Links'
import Footer from './components/Footer';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
    <div className="container">
    <div className="menu-div">
      <Menu/>
    </div>
<Profile/>
<div className="link-buttons">
  <Links/>
</div>
<div className="socials-div">
  <Socials/>
</div>

    </div>
     <div className="footer-div">
  <Footer/>
</div>
    </div>
  );
}

export default App;
