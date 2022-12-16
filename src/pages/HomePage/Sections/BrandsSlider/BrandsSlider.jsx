import React, { useRef } from 'react'
// import { Carousel } from "antd";
import { connect } from 'react-redux'
import { Carousel, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import arrowLeft from '../../../../assets/svg/arrowLeft.svg'
// import arrowRight from "../../../../assets/svg/arrowRight.svg";
import arrowRight from '../../../../assets/svg/arrowRight.svg'

export const BrandsSlider = (props) => {
  console.log('Brands Slider Props', props)
  const sliderRef = useRef()
  const settings = {
    arrows: true,
    dots: false,
    autoplay: true,
    slidesToShow: 6,
    // prevArrow: <img src={arrowLeft} alt="Left Arrow" />,
    // nextArrow: <img src={arrowRight} alt="Right Arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          rows: 2,
        },
      },
    ],
  }
  const goToNextSlide = () => {
    debugger
    sliderRef.current.next()
  }
  const goToPrevSlide = () => {
    debugger
    sliderRef.current.prev()
  }
  return (
    <>
      <div className='home-brand-section'>
        <div className='container-xl'>
          <div className='brands-slider-inner'>
            <div className='brand-arrow'>
              <h3 className='section-title'>
                {props.data.title ? props.data.title : null}
              </h3>
              <div className='seller-slider-btns'>
                <div className='seller-slider-left-btn'>
                  <Button size='small' type='text' onClick={goToPrevSlide}>
                    <img src={arrowLeft} />
                  </Button>
                </div>
                <div className='seller-slider-right-btn'>
                  <Button size='small' type='text' onClick={goToNextSlide}>
                    <img src={arrowRight} />
                  </Button>
                </div>
              </div>
            </div>

            <div className='brand-slider-wrapper'>
              <Carousel ref={sliderRef} {...settings}>
                {props.data.brands.map((brand, key) => {
                  return (
                    <div className='brand-card-wrapper' key={key}>
                      <Link to={'/brand/' + brand.handle}>
                        <img
                          className='product-img'
                          src={brand.logo ? brand.logo : null}
                          alt={brand.name}
                        />
                      </Link>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsSlider)
