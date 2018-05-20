import React from "react";
import TechIcons from "./TechIcons"

const TechStack = (props) => {

  const stack = props.tech.map((el, i) => {
    return (
      <div key={ i } className="inline">
        { TechIcons[el] }
      </div>
    );
  });

  return (
    <div className="text-align--center">
      <span className="">{ stack }</span>
    </div>
  );
}

export default TechStack;
