import React from 'react'
import Carousel from 'react-material-ui-carousel';
import car_img1 from '../assets/images/car-img1.jpg';
import car_img2 from '../assets/images/car-img2.jpg';
import car_img3 from '../assets/images/car-img3.jpg';
import car_img4 from '../assets/images/car-img4.jpg';
import car_img5 from '../assets/images/car-img5.jpg';
import { Button, Paper, Typography } from '@mui/material';
import { CarouselNextIcon, CarouselPrevIcon } from '../shared/icon';
import {useNavigate, useLocation} from 'react-router-dom';
import './home.scss'

function Home() {

  const navigate = useNavigate();
	const location = useLocation();

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
    },
    {
      bannerImg: car_img5,
    }
  ];

  let textItems = [
    {
      text1 : 'Donate Blood, Save Lives',
      description : 'One donation can save upto three lives. The simple, generous act of giving blood can save lives.'
    },
    {
      text1 : 'Days of Gratitude',
      description : "Your birthday can be someone else's special day as well. Make your birthday memeorable by giving someone the 'Gift of Life'. Donate blood, Donate for a cause."
    }
  ]

function Item(props) {
    return (
        <Paper>
            <div className="banner_img">
                <img src={props.item.bannerImg} alt="banner-image" />
            </div>
        </Paper>
    );
}

function TextItem(props) {
  return (
    <div className='overlay_text'>
      <div className='overlay_head'>
        <Typography>{props.item.text1}</Typography>
      </div>
      <div className='overlay_body'>
        <Typography>{props.item.description}</Typography>
      </div>
    </div>
  )
}

  return (
    <div className='home_container'>
      <div className='carousel_container'>
        <Carousel
          className="banner_carousel"
          NextIcon={<CarouselNextIcon />}
          PrevIcon={<CarouselPrevIcon />}
          // navButtonsAlwaysInvisible={true}
          navButtonsAlwaysVisible={false}
          autoPlay={true}
          stopAutoPlayOnHover={false}
          interval={10000}
          animation={'slide'}
          swipe={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}

        </Carousel>
        <div className="carousel_overlay">
          <Carousel
            className='overlay_carousel'
            interval={6000}
            navButtonsAlwaysInvisible={true}
            indicators={false}
          >
            {textItems.map((item,i) => (
              <TextItem key={i} item={item}/>
            ))}
          </Carousel>
          <Button
					  className="register_btn"
					  variant="contained"
					  onClick={(e) => {
						  window.open('');
					  }}
				  >
					  <span>REGISTER NOW</span>
				  </Button>
        </div>
      </div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default Home