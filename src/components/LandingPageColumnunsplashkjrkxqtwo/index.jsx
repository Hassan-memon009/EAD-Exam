import React from "react";
import { Img, Text } from "components";

const LandingPageColumnunsplashkjrkxqtwo = (props) => {
  return (
    <div className={props.className}>
      <Img
        className="common-pointer h-[342px] sm:h-auto object-cover w-full"
        alt="unsplashkjrkxqTwo"
        src={props?.image}
        onClick={props?.onClick}
      />
      <Text
        className="mt-3.5 text-base text-center text-gray-900"
        size="txtBalooRegular16"
      >
        {props?.title}
      </Text>
      <Text
        className="mt-[7px] text-base text-center text-light_blue-900"
        size="txtLatoRegular16Lightblue900"
      >
        {props?.price}
      </Text>
    </div>
  );
};

export default LandingPageColumnunsplashkjrkxqtwo;
