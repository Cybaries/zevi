import {React, useState} from 'react';
import './Main.scss'
import logo from '../images/Logo.png'
import Trend from './Trend';
function Main() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div class="container" id='container'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form">
        <input type="text" placeholder='Search' onClick={handleClick}/>
        <button className="fa fa-search"></button>
      </div>
      {isShown && <Trend />}
    </div>
  );
}

export default Main