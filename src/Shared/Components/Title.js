import React from "react";

const Title = (props) => {
  const { className, title, children } = props;
  return (
    <div className="text-center my-3">
      <h2 className={`d-inline-block title p-3 ${className}`}>
        {children} {title}
      </h2>
    </div>
  );
};

export default Title;
