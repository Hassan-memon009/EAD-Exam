import React from "react";
import { Text, Img } from "components";
import { Button, Line, List } from "components";
import LandingPageColumnunsplashkjrkxqtwo from "components/LandingPageColumnunsplashkjrkxqtwo";
import { navigate } from "react-router-dom";

function TopSeller() {
  const landingPageColumnunsplashkjrkxqtwoPropList1 = [
    {
      title: "Red Shirt",
      price: "$69.00",
      image: "images/img_rectangle1_7.png",
    },
    { title: "Polo White Shirt", image: "images/img_rectangle1_8.png" },
    {
      title: "Pink Casual Shirt",
      price: "$39.00",
      image: "images/img_rectangle1_9.png",
    },
  ];
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mt-6 p-[53px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1250px] mx-auto my-[58px] w-full">
        <div className="flex flex-col gap-[21px] items-center justify-start">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
            size="txtArimoBold36"
          >
            Top Sellers
          </Text>
          <Text
            className="text-center text-gray-700 text-xl"
            size="txtLatoRegular20"
          >
            Browse our top-selling products
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start p-2.5 w-auto">
            <LandingPageColumnunsplashkjrkxqtwo
              className="flex flex-col items-center justify-start w-full"
              image="images/img_rectangle1_6.png"
              title="Gray Polo Shirt"
              price="$49.00"
              onClick={() => navigate("/productdetails")}
            />
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
            orientation="horizontal"
          >
            {landingPageColumnunsplashkjrkxqtwoPropList1.map((props, index) => (
              <React.Fragment
                key={`LandingPageColumnunsplashkjrkxqtwo${index}`}
              >
                <LandingPageColumnunsplashkjrkxqtwo
                  className="flex flex-col items-center justify-start w-full"
                  onClick={() => navigate("/productdetails")}
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Button
          className="cursor-pointer min-w-[161px] text-base text-center uppercase"
          color="light_blue_900"
          size="sm"
        >
          shop now
        </Button>
      </div>
    </div>
  );
}

export default TopSeller;
