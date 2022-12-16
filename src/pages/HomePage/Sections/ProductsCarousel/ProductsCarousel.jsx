import React from 'react'
import { Carousel } from 'antd'
import Slider from 'react-slick'
import { connect, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

// import arrowLeft from "../../../../assets/svg/arrowLeft.svg";
import arrowRight from '../../../../assets/svg/arrowRight.svg'
import ProductCard from '../../../../components/ProductCard/ProductCard'
import { useEffect } from 'react'

export const CollectionSlider = (props) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  // debugger;
  // console.log("Collection Slider Props", props);

  const defaultCountry = useSelector(
    (state) => state.multiLocation.defaultCountry
  )

  useEffect(() => {}, [defaultCountry])

  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <button
  //     {...props}
  //     className={
  //       "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === 0 ? true : false}
  //     type="button"
  //   >
  //     <img src={arrowLeft} alt="" />
  //   </button>
  // );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type='button'
    >
      <img src={arrowRight} alt='' />
    </button>
  )

  const settings = {
    speed: 500,
    slidesToShow: 5,
    autoplay: false,
    // dots: true,
    autoplayspeed: 2500,
    // infinite: false,
    arrows: true,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    nextArrow: <img src={arrowRight} alt='' />,
    // prevArrow: <img src={arrowLeft} alt="" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: true,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  }
  if (props?.data?.products?.length > 6) {
    settings.infinite = true
  }
  if (isMobile) {
    if (props?.data?.products?.length > 2) {
      settings.infinite = true
    }
  } else {
    if (props?.data?.products?.length > 6) {
      settings.infinite = true
    }
  }

  return (
    <>
      <div className='collection-slider-wrapper'>
        <div className='container-xl'>
          {props?.data ? (
            <div className='product-section-heading'>
              <h3 className='section-title'>
                {props?.data?.title ? props.data.title : null}
              </h3>
              {props?.data ? (
                <button className='product-button'>View all</button>
              ) : null}
            </div>
          ) : null}

          <div className='collection-slider-inner'>
            <Slider {...settings}>
              {props?.data
                ? props?.data?.products?.map((product, key) => {
                    return <ProductCard product={product} key={key} />
                  })
                : props?.products?.map((product, key) => {
                    return <ProductCard product={product} key={key} />
                  })}
            </Slider>

            {/* <ProductCard /> */}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionSlider)
