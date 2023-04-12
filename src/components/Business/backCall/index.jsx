import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";

function BackCall() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <form>
              <input type="text" placeholder="Имя" />
              <input type="number" placeholder="Номер телефона" />
              <button>Отправить</button>
            </form>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default BackCall;
