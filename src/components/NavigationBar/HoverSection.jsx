import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import "./HoverSection.scss"
// import "./HoverSection.scss";
export const HoverSection = ({ subCategories }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  // except mega menu and category div ; showMegaMenu false on all
  useEffect(() => {}, [subCategories]);

  return (
    <>
      {!isMobile && (
        <div className="container-xl">
          <div className="two-level-category">
            {subCategories.map((item, index) => {
              return (
                <NavLink key={index} to={item.link}>
                  <p className="two-level-text">{item.label}</p>
                  <div className="three-level-category">
                    {item.children &&
                      item.children.map((childItem, childIndex) => {
                        return (
                          <NavLink key={childIndex} to={childItem.link}>
                            <p className="three-level-text">
                              {childItem.label}
                            </p>
                          </NavLink>
                        );
                      })}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default HoverSection;
