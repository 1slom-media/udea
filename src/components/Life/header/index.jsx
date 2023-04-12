import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Heade() {
  return (
    <>
      <div className={styled.wrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <h2>Belonging</h2>
            <p>
              Everyone can contribute to the development of our community
              regardless of age, gender or nationality.
            </p>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default Heade;
