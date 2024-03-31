import { Row, Col, Card, Button, Image } from 'react-bootstrap'
import logo from './assets/logo.jpg'
import { FaLongArrowAltDown } from 'react-icons/fa'
import Header from './Header';
import Preview from './Preview';
import Footer from './Footer';

function App() {
  return (
    <div className='p-3 bg-body-tertiary'>
      <Header />
      <div className="m-3">
        <div className="p-3 rounded-2 bg-white logo-container">
          <Image src={logo} rounded fluid/>
          <div className="logo-text text-center">
            <h1 className='logo-title'>Carve Away</h1>
            <h2 className='logo-description'>Make your landscapes car-free</h2>
          </div>
        </div>
        <div>
          <Preview />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
