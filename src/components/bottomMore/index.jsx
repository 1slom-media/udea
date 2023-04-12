import { WrapperContainer } from "../../App-styled";
import styled from "./style.module.css";

function BottomMore() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.border}></div>
          <div className={styled.Wrapper}>
            <a href="#">
              <span>See about Coventry University</span>
              <h4>
                <i class="bx bx-chevron-right"></i>
              </h4>
            </a>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default BottomMore;
