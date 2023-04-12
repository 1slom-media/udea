import { useTranslation } from "react-i18next";
import { WrapperContainerFull } from "../../../App-styled";
import Bottom from "./bottom";
import Book from "../../../assets/graduate/book.png";
import { Wrapper, WrapperBack } from "./styled-index";

function Graduate() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperBack>
        <WrapperContainerFull>
          <Wrapper>
            <div className="texts">
              <h2>{t("Graduate.0")}</h2>
              <a href="#">
                <span>Lorem ipsum</span> <i class="bx bx-chevron-right"></i>
              </a>
            </div>
            <img src={Book} alt="photo" />
          </Wrapper>
        </WrapperContainerFull>
      </WrapperBack>
      <Bottom />
    </>
  );
}

export default Graduate;
