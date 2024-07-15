import React from "react";

const Button = (props) => {
  const { className, children } = props;
  return (
    <button className="inline-flex text-white h-12 animate-shimmer hover:scale-105 ease-in duration-300 transition-all hover:shadow-xl hover:shadow-white items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {children}
    </button>
  );
};

export default Button;
