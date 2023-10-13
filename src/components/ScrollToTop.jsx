import { useState } from "react";

import { arrowTop } from "../assets/icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a
      className={`${visible ? "visible" : "hidden"} fixed bottom-0 right-0 m-4 z-50 cursor-pointer`}
    >
      <img src={arrowTop} onClick={scrollToTop} width={50} height={50} />
    </a>
  );
};

export default ScrollButton;
