import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Find() {
  return (
    <div className={styled.WrapperBack}>
      <WrapperContainerFull>
        <div className={styled.Wrapper}>
          <div className={styled.text}>
            <h2>Find the Right</h2>
            <h2 className={styled.headertext}> Program for You</h2>
          </div>
        </div>
      </WrapperContainerFull>
    </div>
  );
}

export default Find;
