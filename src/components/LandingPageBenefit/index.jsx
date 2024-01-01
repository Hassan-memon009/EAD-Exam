import React from "react";

import { Img, Text } from "components";

const LandingPageBenefit = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mb-[7px] md:mt-0 mt-1 w-1/5 md:w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row gap-[22px] items-start justify-start w-[67%] md:w-full">
              <Img className="h-7 mt-0.5" src="images/img_car.svg" alt="car" />
              <Text
                className="text-base text-gray-900 uppercase"
                size="txtBalooRegular16"
              >
                {props?.freeshipping}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[52px] mt-1 text-base text-gray-700 w-[79%] sm:w-full"
              size="txtLatoRegular16Gray700"
            >
              {props?.price}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mb-[7px] md:ml-[0] ml-[74px] md:mt-0 mt-1 w-1/5 md:w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row gap-[22px] items-start justify-start w-[64%] md:w-full">
              <Img
                className="h-7 mt-0.5"
                src="images/img_car.svg"
                alt="car_One"
              />
              <Text
                className="text-base text-gray-900 uppercase"
                size="txtBalooRegular16"
              >
                {props?.support247}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[46px] mt-[3px] text-base text-gray-700 w-[81%] sm:w-full"
              size="txtLatoRegular16Gray700"
            >
              {props?.contactus24hour}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mb-[7px] ml-20 md:ml-[0] md:mt-0 mt-1 w-1/5 md:w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row gap-[22px] items-start justify-start w-[72%] md:w-full">
              <Img
                className="h-7 mt-0.5"
                src="images/img_car.svg"
                alt="car_Two"
              />
              <Text
                className="text-base text-gray-900 uppercase"
                size="txtBalooRegular16"
              >
                {props?.duration}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[46px] mt-1 text-base text-gray-700 w-[81%] sm:w-full"
              size="txtLatoRegular16Gray700"
            >
              {props?.durationOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mb-[7px] md:ml-[0] ml-[79px] md:mt-0 mt-1 w-1/5 md:w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row gap-[22px] items-start justify-start mr-5 w-[92%] md:w-full">
              <Img
                className="h-7 mt-0.5"
                src="images/img_fingerprint.svg"
                alt="fingerprint"
              />
              <Text
                className="text-base text-gray-900 uppercase"
                size="txtBalooRegular16"
              >
                {props?.priceOne}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[46px] mt-1 text-base text-gray-700 w-[81%] sm:w-full"
              size="txtLatoRegular16Gray700"
            >
              {props?.weensuresecure}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageBenefit.defaultProps = {
  freeshipping: "Free Shipping",
  price: "Enjoy free shipping on all orders above $100",
  support247: "SUPPORT 24/7",
  contactus24hour: "Our support team is there to help you for queries",
  duration: "30 DAYS RETURN",
  durationOne: "Simply return it within 30 days for an exchange.",
  priceOne: "100% PAYMENT SECURE",
  weensuresecure: "Our payments are secured with 256 bit encryption",
};

export default LandingPageBenefit;
