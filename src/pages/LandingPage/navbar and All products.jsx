import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageColumnunsplashkjrkxqtwo from "components/LandingPageColumnunsplashkjrkxqtwo";
import LandingPageBenefit from "components/LandingPageBenefit";
import { Text, Img } from "components";
import { Button, Line, List } from "components";

import { handleSectionNavigation } from "utils";

const LandingPagePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the FakeStoreAPI
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center mt-4 p-[15px] w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5">
              <Text
                className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                size="txtLatoRegular36"
                onClick={() => navigate("/landingpage")}
              >
                Grace
              </Text>
            </div>
            <ul className="flex md:flex-1 flex-row font-arimo sm:hidden items-start justify-center md:ml-[0] ml-[183px] w-[18%] md:w-full common-row-list">
              <li>
                <a className="text-center text-light_blue-900 text-xs tracking-[0.60px] uppercase">
                  <Text
                    className="common-pointer"
                    size="txtArimoBold12"
                    onClick={() => navigate("/landingpage")}
                  >
                    HOME
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-9 text-black-900 text-center hover:text-light_blue-900 text-xs tracking-[0.60px] uppercase"
                >
                  <Text size="txtArimoBold12Black900">ABout</Text>
                </a>
              </li>
              <li>
                <a className="ml-[29px] text-black-900 text-center hover:text-light_blue-900 text-xs tracking-[0.60px] uppercase">
                  <Text
                    className="common-pointer"
                    size="txtArimoBold12Black900"
                    onClick={() => {
                      handleSectionNavigation("block1");
                    }}
                  >
                    contact us
                  </Text>
                </a>
              </li>
            </ul>
            <div className="flex md:flex-1 md:flex-col flex-row font-sourcesanspro md:gap-5 items-start justify-center md:ml-[0] ml-[569px] mr-[47px] w-[10%] md:w-full">
              <Img
                className="h-6 md:mt-0 mt-2 w-6"
                src="images/img_user1.svg"
                alt="userOne"
              />
              <div className="md:h-6 h-8 md:ml-[0] ml-[25px] relative w-[33px]">
                <Img
                  className="absolute bottom-[0] h-6 left-[0] w-6"
                  src="images/img_bag.svg"
                  alt="bag"
                />
                <Text
                  className="absolute bg-light_blue-900 flex h-[21px] items-center justify-center right-[0] rounded-[10px] text-[10px] text-center text-white-A700 top-[0] uppercase w-[21px]"
                  size="txtSourceSansProBold10"
                >
                  0
                </Text>
              </div>
              <Img
                className="h-6 ml-5 md:ml-[0] md:mt-0 mt-2 w-6"
                src="images/img_menu1.svg"
                alt="menuOne"
              />
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[29px] p-[63px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start max-w-[1240px] mx-auto my-[46px] w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                size="txtArimoBold36"
              >
                Discover NEW Arrivals
              </Text>
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtLatoRegular20"
              >
                Recently added shirts!
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {products.map((product, index) => (
                  <React.Fragment key={`Product${index}`}>
                    <LandingPageColumnunsplashkjrkxqtwo
                      className="flex flex-1 flex-col items-center justify-start w-full"
                      onClick={() => navigate(`/productdetails/${product.id}`)} // Navigate to product details page
                      title={product.title}
                      price={`$${product.price.toFixed(2)}`}
                      image={product.image}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <LandingPageBenefit className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1356px] mt-[42px] mx-auto p-[63px] md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1240px] mt-[114px] mx-auto md:px-5 w-full">
          <div
            className="bg-black-900 flex md:flex-1 flex-col items-center justify-end p-[120px] md:px-10 sm:px-5 w-[58%] md:w-full"
            id="block1"
          >
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 uppercase"
              size="txtLatoRegular32"
            >
              peace of mind
            </Text>
            <Text
              className="leading-[130.00%] mt-[21px] text-center text-lg text-white-A700 w-[86%] sm:w-full"
              size="txtLatoRegular18"
            >
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </Text>
            <Button className="cursor-pointer min-w-[140px] mt-8 text-center text-sm uppercase">
              buy now
            </Button>
          </div>
          <div className="bg-black-900 flex md:flex-1 flex-col justify-center p-[49px] md:px-10 sm:px-5 w-[41%] md:w-full">
            <Text
              className="md:ml-[0] ml-[71px] mr-[68px] mt-[71px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 uppercase"
              size="txtLatoRegular32"
            >
              Buy 2 Get 1 Free
            </Text>
            <Text
              className="leading-[130.00%] mt-[21px] text-center text-lg text-white-A700 w-full"
              size="txtLatoRegular18"
            >
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </Text>
            <Button className="cursor-pointer mb-[71px] min-w-[140px] md:ml-[0] ml-[123px] mr-36 mt-8 text-center text-sm uppercase">
              buy now
            </Button>
          </div>
        </div>
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
                {landingPageColumnunsplashkjrkxqtwoPropList1.map(
                  (props, index) => (
                    <React.Fragment
                      key={`LandingPageColumnunsplashkjrkxqtwo${index}`}
                    >
                      <LandingPageColumnunsplashkjrkxqtwo
                        className="flex flex-col items-center justify-start w-full"
                        onClick={() => navigate("/productdetails")}
                        {...props}
                      />
                    </React.Fragment>
                  )
                )}
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
      </div>
    </>
  );
};

export default LandingPagePage;
