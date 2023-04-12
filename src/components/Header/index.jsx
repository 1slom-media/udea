import { useState } from "react";
import HeaderBottom from "./headerBottom";
import HeaderTop from "./headerTop";
import { Animation } from "./styled-index";

function Header() {
  const [head, setHead] = useState(false);
  const scrollTop = window.scrollY;
  const Change = () => {
    if (scrollTop >= 15) {
      setHead(true);
    } else {
      setHead(false);
    }
  };
  window.addEventListener("scroll", Change);
  return (
    <>
      <Animation>
        <div className={head ? "ani" : "anim"}>
          <HeaderTop />
          <HeaderBottom />
        </div>
      </Animation>
    </>
  );
}

export default Header;
