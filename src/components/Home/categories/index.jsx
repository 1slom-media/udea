import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";
import { NavLink } from "react-router-dom";

function Categories() {
  const { t, i18n } = useTranslation();
  return (
    <WrapperContainer>
      <div className={styled.Wrapper}>
        <h2 className={styled.h2subtext}>Find the Right Program for You</h2>
        <div className={styled.headerTexts}>
          <div>
            <h2>Foundation</h2>
          </div>
          <div>
            <h2>BA (Hons)</h2>
          </div>
        </div>
        <h2 className={styled.h2Media}>Foundation</h2>
        <div className={styled.cards}>
          <div className={styled.card}>
            <h3 className={styled.h3subtext}>Digital Technologies</h3>
            <p>
              Creating opportunities for the youth of Uzbekistan to receive
              education. Creating opportunitie
            </p>
            <div className={styled.buttons}>
              <NavLink to={"/digitial"}>
                <p>
                  <i class="bx bx-chevron-right"></i>
                </p>
              </NavLink>
            </div>
          </div>
          <h2 className={styled.h2Media}>BSc (Hons)</h2>
          <div className={styled.card}>
            <h3 className={styled.h3subtext}>English language and TEFL</h3>
            <p>
              Creating opportunities for the youth of Uzbekistan to receive
              education
            </p>
            <div className={styled.buttons}>
              <NavLink to={"/baenglish"}>
                <p>
                  <i class="bx bx-chevron-right"></i>
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styled.headerTexts}>
          <div>
            <h2>BSc (Hons)</h2>
          </div>
        </div>
        <h2 className={styled.h2Media}>BSc (Hons)</h2>
        <div className={styled.Bccards}>
          <div className={styled.card}>
            <div>
              <h3 className={styled.h3subtext}>Accounting and Finance</h3>
              <p>
                Creating opportunities for the youth of Uzbekistan to receive
                education. Creating opportunitie
              </p>
            </div>
            <div className={styled.buttons}>
              <NavLink to={"/bscaccaunting"}>
                <p>
                  <i class="bx bx-chevron-right"></i>
                </p>
              </NavLink>
            </div>
          </div>
          <div className={styled.card}>
            <div>
              <h3 className={styled.h3subtext}>
                International Finance and Banking
              </h3>
              <p>
                Creating opportunities for the youth of Uzbekistan to receive
                education
              </p>
            </div>
            <div className={styled.buttons}>
              <NavLink to={"/bscinternational"}>
                <p>
                  <i class="bx bx-chevron-right"></i>
                </p>
              </NavLink>
            </div>
          </div>
          <div className={styled.Lastcard}>
            <div className={styled.box}>
              <div>
                <h3 className={styled.h3subtext}>
                  Information Technology for Business
                </h3>
                <p>
                  Creating opportunities for the youth of Uzbekistan to receive
                  education
                </p>
              </div>
              <div className={styled.buttons}>
                <NavLink to={"/bscinfarmation"}>
                  <p>
                    <i class="bx bx-chevron-right"></i>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Categories;
