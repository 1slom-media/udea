import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../App-styled";
import { Wrapper } from "./styled-index";
import { useState } from "react";
import { useEffect } from "react";

function HeaderBottom() {
  const { t, i18n } = useTranslation();
  const [head, setHead] = useState(false);


  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <div className="Header">
            <ul className="texts">
              <li>
                <h2>{t("Header.5")}</h2>
              </li>
              <li>
                <h2 className="h2text">{t("Header.6")}</h2>
              </li>
            </ul>
            <div>
              <button className="btn1">Консультация</button>
              <a href="https://lms.udea.uz/register">
                <button className="btn2">{t("Header.7")}</button>
              </a>
            </div>
          </div>
        </WrapperContainer>
      </Wrapper>
    </>
  );
}

export default HeaderBottom;
