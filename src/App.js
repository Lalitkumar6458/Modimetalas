
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {colors} from './Constants/colors'
import {boxShadow} from './Constants/styleData'
import BaseIndex from './Components/BaseComponents/BaseIndex';
import { Routes, Route, Link } from "react-router-dom";
import ScrollButton from './Components/BaseComponents/ScrollTop';

function App() {
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
  return (
    <div className="App">
    
      <BaseIndex/>
      <ScrollButton />
     
    </div>
  );
}

export default App;
