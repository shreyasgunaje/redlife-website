import React from 'react'
import Carousel from 'react-material-ui-carousel';
import car_img1 from '../assets/images/car-img1.jpg';
import car_img2 from '../assets/images/car-img2.jpg';
import car_img3 from '../assets/images/car-img3.jpg';
import car_img4 from '../assets/images/car-img4.jpg';
import { Paper } from '@mui/material';
import './home.scss'

function Home() {
  let items = [
    {
        bannerImg: car_img1,
    },
    {
        bannerImg: car_img2,
    },
    {
      bannerImg: car_img3,
    },
    {
      bannerImg: car_img4,
    }
];
function Item(props) {
    return (
        <Paper>
            <div className="banner_img">
                <img src={props.item.bannerImg} alt="banner-image" />
            </div>
        </Paper>
    );
}
  return (
    <div className='home_container'>
      <div className='carousel_container'>
        <Carousel
          className="banner_carousel"
          // NextIcon={<CarouselNextIcon />}
          // PrevIcon={<CarouselPrevIcon />}
          // navButtonsAlwaysInvisible={true}
          navButtonsAlwaysVisible={false}
          autoPlay={true}
          stopAutoPlayOnHover={true}
          interval={5000}
          animation={'slide'}
          swipe={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}

        </Carousel>
        <div className="carousel_overlay"></div>
      </div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default Home