// import logo from './logo.svg';
import './App.css';
import Mid from './components/Mid';
import Header from './components/Header';
import './mystyle.css';
import Footer from './components/footer';
import Banner from './components/banner';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header></Header>
      <Banner></Banner>
       <Mid></Mid>
      {/* <Footer></Footer>  */}
      
    </div>
    </BrowserRouter>

    
  );
}

export default App;
