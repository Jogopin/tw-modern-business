import React from "react";

const Button = (props) => {
  const { styles } = props;

  return (
    <button
      type="button"
      className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
