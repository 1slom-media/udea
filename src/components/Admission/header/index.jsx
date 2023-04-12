import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Header() {
  return (
    <>
      <div className={styled.wrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <h2>Admissions information</h2>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default Header;
