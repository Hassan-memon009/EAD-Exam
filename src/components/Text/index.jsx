import React from "react";

const sizeClasses = {
  txtArimoBold12Black900: "font-arimo font-bold",
  txtLatoRegular16Gray700: "font-lato font-normal",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoRegular32: "font-lato font-normal",
  txtArimoBold36: "font-arimo font-bold",
  txtLatoRegular20: "font-lato font-normal",
  txtLatoRegular16Lightblue900: "font-lato font-normal",
  txtBalooRegular16: "font-baloo font-normal",
  txtArimoBold12: "font-arimo font-bold",
  txtLatoRegular36: "font-lato font-normal",
  txtLatoRegular14: "font-lato font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtSourceSansProBold10: "font-bold font-sourcesanspro",
  txtInterRegular28: "font-inter font-normal",
  txtArimoBold12Gray900: "font-arimo font-bold",
  txtSourceSansProBold13: "font-bold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
