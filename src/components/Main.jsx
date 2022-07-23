import { React, useState } from 'react';
import './Main.scss'
import logo from '../images/Logo.png'
import Trend from './Trend';
// import P2 from './P2';
function Main() {
  const [ isShown, setIsShown ] = useState(false);
  // const [ isDisplay, setDisplay ] = useState(false);
  const [ message, setMessage ] = useState('');
  const update = event => { 
    setMessage(event.target.value);
  }
  const handleClick = event => {
    event.preventDefault();
    setIsShown(true);
  };
  const invisible = () => {
    setIsShown(false);
  }
  const search = event => { 
    event.preventDefault();
    window.open(`https://www.google.com/search?q=${message}`, '_self', 'noopener, noreferrer');
    // setDisplay(!isDisplay);
  }

  return (
    <div class="container" id='container'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form">
        <input type="text" name='message' placeholder='Search' value={message} onChange={update} onClick={handleClick} onBlur={invisible} />
        <button className="fa fa-search" onClick={search}></button>
      </div>
      {isShown && <Trend />}
      {/* {isDisplay && <P2 />} */}
    </div>
  );
}

export default Main