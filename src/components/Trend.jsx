import { faker } from '@faker-js/faker'
import './Trend.scss'

function Trend() {
    let link1 = faker.image.fashion(160, 200, true);
    let link2 = faker.image.fashion(160, 200, true);
    let link3 = faker.image.fashion(160, 200, true);
    let link4 = faker.image.fashion(160, 200, true);
  return (
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
          Trousers
        </div>
        <div className="pop">
          T-Shirt
        </div>
        <div className="pop">
          Jeans
        </div>
        <div className="pop">
          Shorts
        </div>
      </div>
  )
}

export default Trend