import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleRepo from "../SingleRepo/SingleRepo";
import "./Slider.css";

export default function Slider({ repos }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="box">
      <Carousel responsive={responsive} infinite={true}>
        {repos?.map((repo) => (
          <SingleRepo key={repo.id} repo={repo} />
        ))}
      </Carousel>
    </div>
  );
}
