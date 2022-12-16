import React, { useRef } from "react";
import { connect } from "react-redux";
import TabCarousel from "./TabCarousel/TabCarousel";
import arrowLeft from "../../../../assets/svg/arrowLeft.svg";
import arrowRight from "../../../../assets/svg/arrowRight.svg";
import { Button } from "antd";
import "./CategoriesCarousel.scss";
export const CategoriesCarousel = (props) => {
  const sliderRef = useRef();
  // const { TabPane } = Tabs;
  const goToNextSlide = () => {
    debugger;
    sliderRef.current.next();
  };
  const goToPrevSlide = () => {
    debugger;
    sliderRef.current.prev();
  };
  return (
    <>
      <div className="collection-tabs-wrapper">
        <div className="container-xl position-rel">
          <div className="brand-arrow">
            <h3 className="collection-name">{props?.data?.title}</h3>
            {/* <div className="seller-slider-btns">
              <div className="seller-slider-left-btn">
                <Button size="small" type="text" onClick={goToPrevSlide}>
                  <img src={arrowLeft} />
                </Button>
              </div>
              <div className="seller-slider-right-btn">
                <Button size="small" type="text" onClick={goToNextSlide}>
                  <img src={arrowRight} />
                </Button>
              </div>
            </div> */}
          </div>

          {props?.data?.categories?.length ? (
            <div className="collection-tabs">
              {props?.data?.categories?.map((cat, key) => {
                return (
                  // <TabPane tab={cat.handle.replace(/-/g, " ")} key={key}>
                  <TabCarousel catHandle={cat.handle} products={cat.products} />
                  // </TabPane>
                );
              })}
            </div>
          ) : null}

          {/* <Tab className="collection-tabs" menu={{ text: true }} panes={panes} /> */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesCarousel);
