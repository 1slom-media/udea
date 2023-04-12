import { WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Help() {
  return (
    <>
      <div className={styled.wrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <h2>How may we help you?</h2>
            <p>
              Students Support Service team consists of young and energetic team
              that delivers high-quality service with individual approach.
            </p>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default Help;
