import { Wrapper, WrapperBack, Box } from "./styled-index";
import Celendar from "../../../assets/home/homehero/celendar.png";
import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from "./style.module.css";
import { NavLink } from "react-router-dom";
function HomeHero() {
  const { t, i18n } = useTranslation();
  const [box, setBox] = useState(false);
  return (
    <>
      <WrapperBack>
        <WrapperContainerFull>
          <Wrapper>
            <div className={styled.open}>
              {box ? (
                <>
                  <button className={styled.btn}>
                    <span className={styled.bx}>
                      <i class="bx bx-chevron-left"></i>
                    </span>

                    <NavLink className={styled.Links} to={"/news"}>
                      <span className={styled.textSpan}>Upcoming events</span>
                    </NavLink>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setBox(true)}>
                    <span className={styled.bx}>
                      <i class="bx bx-chevron-left"></i>
                    </span>

                    <NavLink className={styled.Link} to={"/news"}>
                      <span className={styled.textSpan}>Upcoming events</span>
                    </NavLink>
                  </button>
                </>
              )}
            </div>
            <div className="header">
              <div className="texts">
                <p>{t("HomeHero.0")}</p>
                <h3>
                  <span>Learn more</span>
                  <i class="bx bx-chevron-right"></i>
                </h3>
              </div>
              <Box box={box === false}>
                <h3 onClick={() => setBox(false)} className={styled.subtext}>
                  <i class="bx bx-chevron-right"></i>
                </h3>
                <ul>
                  <li>
                    <img src={Celendar} alt="celendar" />
                    <p>{t("HomeHero.2")} </p>
                  </li>
                  <li className="borderLi">
                    <img src={Celendar} alt="celendar" />
                    <p>{t("HomeHero.2")} </p>
                  </li>
                  <li>
                    <img src={Celendar} alt="celendar" />
                    <p>{t("HomeHero.2")} </p>
                  </li>
                </ul>
                <div className="moreDiv">
                  <a href="#">
                    <span className={styled.span}> {t("HomeHero.3")}</span>
                    <h3>
                      <i class="bx bx-chevron-right"></i>
                    </h3>
                  </a>
                </div>
              </Box>
            </div>
          </Wrapper>
        </WrapperContainerFull>
      </WrapperBack>
    </>
  );
}

export default HomeHero;
