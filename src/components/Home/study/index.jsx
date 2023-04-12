import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../App-styled";
import { Wrapper, WrapperBack } from "./styled-index";

import img1 from "../../../assets/study/img1.png";
import img2 from "../../../assets/study/img2.png";
import img3 from "../../../assets/study/img3.png";
import img4 from "../../../assets/study/img4.png";

function Study() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperBack>
        <WrapperContainer>
          <Wrapper>
            <h2>{t("Study.0")}</h2>
            <h2>
              {t("Study.1")}
              <span>{t("Study.14")}</span>
            </h2>
            <h2>
              <span>{t("Study.2")}</span>
            </h2>
            <div className="iframe">
              <iframe
                width="100%"
                className="iframe"
                height="750"
                src="https://www.youtube.com/embed/vWGNs7wCAsw"
                title="Windows 11.1 - 2023"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="cards">
              <div className="conventrCard">
                <div className="textss">
                  <h3>{t("Study.3")}</h3>
                  <p>{t("Study.4")}</p>
                </div>
              </div>
              <div className="miniCards">
                <div className="card topCard">
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <h3>{t("Study.5")}</h3>
                  <p>{t("Study.6")}</p>
                </div>
                <div className="card">
                  <div>
                    {" "}
                    <img src={img4} alt="" />
                  </div>
                  <h3>{t("Study.7")}</h3>
                  <p>{t("Study.8")}</p>
                </div>
              </div>
            </div>
            <div className="shortCards">
              <div className="card">
                <div className="divImg">
                  <img src={img2} alt="" />
                </div>
                <div>
                  {" "}
                  <h3>Shortlisted for University of the Year</h3>
                  <p>The Times and Sunday Times Good University Guide 2021</p>
                </div>
              </div>
              <div className="card">
                <div className="divImg">
                  <img className="imgss" src={img3} alt="" />
                </div>
                <div>
                  <h3>Top 100 in the World for “International Outlook”</h3>
                  <p>Times Higher Education World University Rankings 2022</p>
                </div>
              </div>
            </div>
            <div className="likn">
              <a href="#">
                <span>See about Coventry University</span>{" "}
                <i class="bx bx-chevron-right"></i>
              </a>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperBack>
    </>
  );
}

export default Study;
