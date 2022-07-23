import React from 'react';
import render from 'react-dom';
import './Main.scss'
import logo from '../images/Logo.png'
import Trend from './Trend';
function Main() {
  let callTrend = () => { 
    render(<Trend />, document.getElementById('container'));
  }
  return (
    <div class="container" id='container'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form">
        <input type="text" placeholder='Search' onFocus={callTrend}/>
        <button className="fa fa-search"></button>
      </div>
      <Trend />
    </div>
  );
}

export default Main