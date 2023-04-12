import { WrapperContainer } from "../../../../App-styled";
import { Wrapper } from "./styled-index";

function Bottom() {
  return (
    <WrapperContainer>
      <Wrapper>
        <div className="border"></div>
        <a href="#">
          <span> See our Programs </span>
          <i class="bx bx-chevron-right"></i>
        </a>
      </Wrapper>
    </WrapperContainer>
  );
}

export default Bottom;
