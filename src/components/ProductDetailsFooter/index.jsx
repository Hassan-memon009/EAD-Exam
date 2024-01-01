import React from "react";

import { Img, Line, Text } from "components";

const ProductDetailsFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start mt-[37px] w-[96%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-[29px] items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                {props?.companyinfotext}
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900 w-full"
                size="txtLatoRegular16"
              >
                {props?.aboutustext}
              </Text>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                {props?.helplinkstext}
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900 w-full"
                size="txtLatoRegular16"
              >
                {props?.returnsorderstatustext}
              </Text>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                {props?.usefullinkstext}
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900 w-full"
                size="txtLatoRegular16"
              >
                {props?.specialofferstext}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start md:mt-0 mt-0.5 w-[24%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                  size="txtArimoBold12Gray900"
                >
                  {props?.getintheknowtext}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtLatoRegular16Gray700"
                    >
                      {props?.enteremailtext}
                    </Text>
                    <Img
                      className="h-12 w-12"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <Line className="bg-gray-900 h-px w-[86%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[77px] justify-end relative w-full">
            <div className="flex flex-row gap-4 h-full items-center justify-between mb-1 ml-auto mt-auto w-[22%]">
              <Img
                className="h-[34px] md:h-auto object-cover"
                src="images/img_rectangle13_34x56.png"
                alt="rectangleThirteen"
              />
              <Img
                className="h-[34px] md:h-auto object-cover"
                src="images/img_rectangle14_34x56.png"
                alt="rectangleFourteen"
              />
              <Img
                className="h-[34px] md:h-auto object-cover"
                src="images/img_rectangle15_34x56.png"
                alt="rectangleFifteen"
              />
              <Img
                className="h-[34px] md:h-auto object-cover"
                src="images/img_rectangle16_34x56.png"
                alt="rectangleSixteen"
              />
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
              <Line className="bg-gray-200 h-px w-full" />
              <Text
                className="mt-8 text-gray-900 text-sm"
                size="txtLatoRegular14"
              >
                {props?.languagetext}
              </Text>
              <Text
                className="mt-2.5 text-gray-900 text-sm"
                size="txtLatoRegular14"
              >
                {props?.termandconditiontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetailsFooter.defaultProps = {
  companyinfotext: "Company info",
  aboutustext: (
    <>
      About Us
      <br />
      Latest Posts
      <br />
      Contact Us
      <br />
      Shop
    </>
  ),
  helplinkstext: "help links",
  returnsorderstatustext: (
    <>
      Tracking
      <br />
      Order Status
      <br />
      Delivery
      <br />
      Shipping Info
      <br />
      FAQ
    </>
  ),
  usefullinkstext: "useful links",
  specialofferstext: (
    <>
      Special Offers
      <br />
      Gift Cards
      <br />
      Advetising
      <br />
      Terms of Use
    </>
  ),
  getintheknowtext: "get in the know",
  enteremailtext: "Enter email",
  languagetext: "© 2020 FasTech Systems Private Limited Sukkur, ",
  termandconditiontext: <>Privacy Policy Terms & Conditions</>,
};

export default ProductDetailsFooter;
