import './Main.scss'
import logo from '../images/Logo.png'
import {faker} from '@faker-js/faker'
function Main() {
  let link1 = faker.image.fashion(160, 200, true);
  let link2 = faker.image.fashion(160, 200, true);
  let link3 = faker.image.fashion(160, 200, true);
  let link4 = faker.image.fashion(160, 200, true);
  return (
    <div class="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form">
        <input type="text" placeholder='Search'/>
        <button className="fa fa-search"></button>
      </div>
      <div className="trend">
        <div className='title'>Popular Trends</div>
        <div className="suggestions">
          <div className="display">
            <img src={link1} alt="" />
            <figcaption>#1</figcaption>
          </div>
          <div className="display">
            <img src={link2} alt="" />
            <figcaption>#2</figcaption>
          </div>
          <div className="display">
            <img src={link3} alt="" />
            <figcaption>#3</figcaption>
          </div>
          <div className="display">
            <img src={link4} alt="" />
            <figcaption>#4</figcaption>
          </div>
        </div>
        <div className='title'>Popular Searches</div>
        <div className="pop">
        </div>
        <div className="pop">
        </div>
        <div className="pop">
        </div>
      </div>
    </div>
  );
}

export default Main