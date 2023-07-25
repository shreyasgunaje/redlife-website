import React from 'react'
import Carousel from 'react-material-ui-carousel';
import car_img1 from '../assets/images/car-img1.jpg';
import car_img2 from '../assets/images/car-img2.jpg';
import car_img3 from '../assets/images/car-img3.jpg';
import car_img4 from '../assets/images/car-img4.jpg';
import car_img5 from '../assets/images/car-img5.jpg';
import amarUjala from '../assets/images/AmarUjala.png';
import businessStandard from '../assets/images/BusinessStandard.png';
import deccanHerald from '../assets/images/DeccanHerald.png';
import huffPost from '../assets/images/HuffPost.png';
import indiaToday from '../assets/images/IndiaToday.png';
import timesOfIndia from '../assets/images/TimesOfIndia.png';
import { Button, Card, Paper, Typography } from '@mui/material';
import { CarouselNextIcon, CarouselPrevIcon } from '../shared/icon';
import {useNavigate, useLocation} from 'react-router-dom';
import './home.scss';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../shared/_slick-theme.scss";
import "../shared/_slick.scss";

function Home() {

  const navigate = useNavigate();
	const location = useLocation();

  function MainCarousel() {
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
    function Item(props) {
      return (
        <Paper>
            <div className="banner_img">
                <img src={props.item.bannerImg} alt="banner-image" />
            </div>
        </Paper>
      );
    }
    return(
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
    )
  }

  function TextCarousel(){
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
    return(
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
    )
  }

  function FeaturedSlick() {
    let items = [
      {
        img: amarUjala,
      },
      {
        img: businessStandard,
      },
      {
        img: deccanHerald,
      },
      {
        img: huffPost,
      },
      {
        img: indiaToday,
      },
      {
        img: timesOfIndia,
      }
    ];
    function Item(props) {
      return (
        <Card 
          className='featured_item'
          variant=''
        >
          <div className='featured_inner'>
            <img src={props.item.img} alt="featured-image" />
          </div>    
        </Card>
      );
    }
    return(
      <Paper>
        <Slider
          className='featured_slick'
          dots={false}
          infinite={true}
          slidesToShow= {4}
          responsive={[
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
          slidesToScroll= {1}
          autoplaySpeed={1000}
          autoplay={true}
          pauseOnHover={false}
          pauseOnFocus={false}
          // centerMode={true}
          // centerPadding='0px'
        >
          {items.map((item, i) => (
            <Item item={item} key={i}/>
          ))}
        </Slider>
      </Paper>
    )
  }

  return (
    <div className='home_container'>
      <div className='carousel_container'>
        <MainCarousel/>
        <div className="carousel_overlay">
          <TextCarousel/>
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
      <div className='featured'>
        <FeaturedSlick/>
      </div>
    </div>
  )
}

export default Home