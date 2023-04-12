import { Wrapper, WrapperBack } from "./styled-index";
import Logo from "../../../assets/header/logo.png";
import { WrapperContainer } from "../../../App-styled";
import { useState } from "react";
import HeaderMenu from "./headerHamburger";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import tele from "../../../assets/header/Vector.svg";
import canel from "../../../assets/header/Group.svg";

function HeaderTop() {
  const [modal, setModal] = useState(false);
  const HandelOpen = (e) => {
    setModal(true);
  };
  const HandelClose = (e) => {
    setModal(false);
  };
  const { t, i18n } = useTranslation();
  const HendelChange = (e) => {
    e.preventDefault();
    const LanVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LanVal);
    window.location.reload();
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };

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
      <WrapperBack>
        <WrapperContainer>
          <Wrapper>
            <div className={head ? "an" : "ai"}>
              <div className="logo">
                <NavLink to={"/"}>
                  <img src={Logo} alt="logo" />
                </NavLink>
              </div>
              <div className="links">
                <ul className="ulLinks">
                  <NavLink to={"/business"}>
                    <li>
                      <a href="#">{t("Header.1")}</a>
                    </li>
                  </NavLink>
                  <li>
                    <NavLink to={"/programs"}>
                      <a href="#">{t("Header.0")}</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/sociallife"}>
                      <a href="#">Social life & Campus</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/admission"}>
                      <a href="#">Admission</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/news"}>
                      <a href="#">News and Events</a>
                    </NavLink>
                  </li>
                </ul>
                <ul className="iconLinks">
                  <li>
                    <select onChange={HendelChange}>
                      {ValLang() === "uz" ? (
                        <>
                          <option value="uz">UZ</option>
                          <option value="ru">RU</option>
                          <option value="en">EN</option>
                        </>
                      ) : ValLang() === "ru" ? (
                        <>
                          <option value="ru">RU</option>
                          <option value="uz">UZ</option>
                          <option value="en">EN</option>
                        </>
                      ) : ValLang() === "en" ? (
                        <>
                          <option value="en">EN</option>
                          <option value="uz">UZ</option>
                          <option value="ru">RU</option>
                        </>
                      ) : (
                        <>
                          <option value="uz">UZ</option>
                          <option value="ru">RU</option>
                          <option value="en">EN</option>
                        </>
                      )}
                    </select>
                  </li>
                  <li>
                    <a href="#">
                      <img src={tele} alt="photo" />
                    </a>
                  </li>
                  <li>
                    <a href="http://lms.udea.uz/login">
                      <img src={canel} alt="photo" />
                    </a>
                  </li>
                </ul>
              </div>
              <i onClick={HandelOpen} class="bx bx-menu menu"></i>
            </div>
          </Wrapper>
          <HeaderMenu
            modal={modal}
            HandelClose={HandelClose}
            ValLang={ValLang}
            HendelChange={HendelChange}
          />
        </WrapperContainer>
      </WrapperBack>
    </>
  );
}

export default HeaderTop;
