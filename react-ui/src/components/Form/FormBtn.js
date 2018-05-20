import React from "react";

export const FormBtn = props =>
  <button {...props} className="submitbtn btn right  bg--primary color--primary-overlay hv--main-accent-overlay hv-bg--main-accent">
    {props.children}
  </button>;
