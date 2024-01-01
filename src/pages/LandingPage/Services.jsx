import React from "react";

import { Img, Text } from "components";

const ServicesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[70px] md:ml-[0] ml-[63px] md:mt-0 mt-[67px] w-[18%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row font-baloo gap-[22px] items-start justify-start w-[67%] md:w-full">
                <Img
                  className="h-7 mt-0.5"
                  src="images/img_car.svg"
                  alt="car"
                />
                <Text
                  className="text-base text-gray-900 uppercase"
                  size="txtBalooRegular16"
                >
                  Free Shipping
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[52px] mt-1 text-base text-gray-700 w-[79%] sm:w-full"
                size="txtLatoRegular16"
              >
                Enjoy free shipping on all orders above $100
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[70px] md:ml-[0] ml-[74px] md:mt-0 mt-[67px] w-[18%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row font-baloo gap-[22px] items-start justify-start w-[64%] md:w-full">
                <Img
                  className="h-7 mt-0.5"
                  src="images/img_car.svg"
                  alt="car_One"
                />
                <Text
                  className="text-base text-gray-900 uppercase"
                  size="txtBalooRegular16"
                >
                  SUPPORT 24/7
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[46px] mt-1 text-base text-gray-700 w-[81%] sm:w-full"
                size="txtLatoRegular16"
              >
                Our support team is there to help you for queries
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[70px] ml-20 md:ml-[0] md:mt-0 mt-[67px] w-[18%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row font-baloo gap-[22px] items-start justify-start w-[72%] md:w-full">
                <Img
                  className="h-7 mt-0.5"
                  src="images/img_car.svg"
                  alt="car_Two"
                />
                <Text
                  className="text-base text-gray-900 uppercase"
                  size="txtBalooRegular16"
                >
                  30 DAYS RETURN
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[46px] mt-1 text-base text-gray-700 w-[81%] sm:w-full"
                size="txtLatoRegular16"
              >
                Simply return it within 30 days for an exchange.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[70px] md:ml-[0] ml-[79px] mr-[123px] md:mt-0 mt-[67px] w-[18%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row font-baloo gap-[22px] items-start justify-start mr-5 w-[92%] md:w-full">
                <Img
                  className="h-7 mt-0.5"
                  src="images/img_fingerprint.svg"
                  alt="fingerprint"
                />
                <Text
                  className="text-base text-gray-900 uppercase"
                  size="txtBalooRegular16"
                >
                  100% PAYMENT SECURE
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[46px] mt-1 text-base text-gray-700 w-[81%] sm:w-full"
                size="txtLatoRegular16"
              >
                Our payments are secured with 256 bit encryption
              </Text>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default ServicesPage;
