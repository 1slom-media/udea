import { useState } from "react";
import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";

function Request() {
  const [inputText, setInputText] = useState("+998");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <div className={styled.request}>
              <div className={styled.texts}>
                <h3>
                  Join us on this exciting journey and discover the endless
                  possibilities that await you!
                </h3>
              </div>
              <form>
                <input type="text" placeholder="Имя" />
                <input type="string" onChange={handleChange} value={inputText} />
                <button>Отправить</button>
              </form>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default Request;
