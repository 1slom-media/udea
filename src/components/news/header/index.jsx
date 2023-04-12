import { WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function NewsHeader() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <div className={styled.WrapperTexts}>
          <WrapperContainerFull>
            <div className={styled.wrapper}>
              <div className={styled.texts}>
                <div className={styled.date}>
                  <h3>24 Feb, 2023</h3>
                  <p>UDEA</p>
                </div>
                <h2 className={styled.subtext}>Sorem ipsum dolor</h2>
              </div>
              <button>News</button>
            </div>
          </WrapperContainerFull>
        </div>
      </div>
    </>
  );
}

export default NewsHeader;
