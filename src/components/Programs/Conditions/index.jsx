import { WrapperContainer } from "../../../App-styled";
import Man from "../../../assets/condition/man.png";
import styled from "./style.module.css";
import Chemodan from "../../../assets/condition/chemodan.png";
import Medal from "../../../assets/condition/meda.png";
import Comp from "../../../assets/condition/comp.png";
import Build from "../../../assets/condition/build.png";
import HomeCarusel from "../../Home/homeCarusel";

function Condition() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <h2>Ваш успех - наша главная цель</h2>
            <div className={styled.cards}>
              <div className={styled.bigCards}>
                <img src={Man} alt="photo" />
                <div className={styled.textDiv}>
                  <h3 className={styled.subtext}>
                    Перспективные возможности для карьерного роста.
                  </h3>
                </div>
              </div>
              <div className={styled.miniCards}>
                <div className={styled.card}>
                  <div className={styled.imgDiv}>
                    <img src={Medal} alt="photo" />
                  </div>
                  <div className={styled.textDiv}>
                    <h3 className={styled.h3Sub}>
                      Развитие инициативности и лидерских навыков.
                    </h3>
                  </div>
                </div>
                <div className={styled.card}>
                  <div className={styled.imgDivs}>
                    <img src={Chemodan} alt="photo" />
                  </div>
                  <div className={styled.textDiv}>
                    <h3 className={styled.h3Sub}>
                      Участие в международных проектах и стажировках.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.bottonCards}>
              <div className={styled.cardd}>
                <img src={Build} alt="photo" />
                <div>
                  <h3>
                    Современное здание, оснащенное всеми необходимыми
                    удобствами.
                  </h3>
                </div>
              </div>
              <div className={styled.cardd}>
                <img src={Comp} alt="photo" />
                <div>
                  <h3>Обучение по индивидуальному плану развития.</h3>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
      <HomeCarusel />
    </>
  );
}

export default Condition;
