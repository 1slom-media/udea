import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import Logo from "../../assets/header/logo.png";
import { Wrapper } from "./styled-index";
import Request from "../Home/request";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Request />
      <Wrapper>
        <WrapperContainer>
          <img src={Logo} alt="logo" />
          <div className="texts">
            <ul className="textsUl">
              <li>
                <h3>University</h3>
              </li>
              <li>
                <h3 className="h3Subs">Programs</h3>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
            </ul>
            <ul className="textsUl">
              <li>
                <h3>Community & Campus</h3>
              </li>
              <li>
                <h3 className="h3Sub">Admission</h3>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
              <li>
                <p>{t("Footer.6")}</p>
              </li>
            </ul>
            <ul className="textsUl">
              <li>
                <h3>News and Events</h3>
              </li>
            </ul>
            <ul className="ulSubtext">
              <li>
                <h3>+998 (78) 888 08 00</h3>
                <p>
                  3, Boshlik street, Yakkasaray district, Tashkent, 100022,
                  Uzbekistan
                </p>
              </li>
              <li>
                <p>info@udea.uz</p>
                <p>Monday – Saturday (9:00 – 18:00)</p>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <p className="pSub">{t("Footer.8")}</p>
            <div>
              <div className="icons">
                <i class="bx bxl-youtube"></i>
                <a href="https://t.me/udeauz">
                  <i class="bx bxl-telegram"></i>
                </a>
                <a href="https://www.facebook.com/udeauz">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://instagram.com/udeauz?igshid=YmMyMTA2M2Y=">
                  <i class="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </Wrapper>
    </>
  );
}

export default Footer;
