import React from "react";
import { Text, Img } from "components";
import { Button, Line, List } from "components";

function Footer() {
  return (
    <footer className="bg-gray-50 flex font-arimo items-center justify-center mt-[278px] md:px-5 w-full">
      <div className="flex flex-col items-center justify-center mb-[30px] mt-[67px] mx-auto w-[91%]">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-[29px] items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                Company info
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900"
                size="txtLatoRegular16"
              >
                <>
                  About Us
                  <br />
                  Latest Posts
                  <br />
                  Contact Us
                  <br />
                  Shop
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                help links
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900"
                size="txtLatoRegular16"
              >
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
              </Text>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start">
              <Text
                className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                size="txtArimoBold12Gray900"
              >
                useful links
              </Text>
              <Text
                className="leading-[28.00px] text-base text-gray-900"
                size="txtLatoRegular16"
              >
                <>
                  Special Offers
                  <br />
                  Gift Cards
                  <br />
                  Advetising
                  <br />
                  Terms of Use
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start md:mt-0 mt-0.5 w-[24%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-gray-900 text-xs tracking-[0.60px] uppercase"
                  size="txtArimoBold12Gray900"
                >
                  get in the know
                </Text>
              </div>
              <div className="flex flex-col font-lato items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-700"
                      size="txtLatoRegular16Gray700"
                    >
                      Enter email
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
          <div className="flex font-lato h-[77px] justify-end relative w-full">
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
                className="mt-[30px] text-gray-900 text-sm"
                size="txtLatoRegular14"
              >
                © 2020 FasTech Systems Private Limited Sukkur,{" "}
              </Text>
              <Text
                className="mt-3 text-gray-900 text-sm"
                size="txtLatoRegular14"
              >
                <>Privacy Policy Terms & Conditions</>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
