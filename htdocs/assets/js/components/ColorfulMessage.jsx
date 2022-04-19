import React from "react";

export const ColorfulMessage = (props) => {
  console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "32px",
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};
