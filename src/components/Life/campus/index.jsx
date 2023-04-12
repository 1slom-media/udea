import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";
import hall from "../../../assets/campus/hall.png";
import lab from "../../../assets/campus/lab.png";
import libary from "../../../assets/campus/libary.png";
import comp from "../../../assets/campus/comp.png";
import table from "../../../assets/campus/table.png";

function Campus() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <h2>Current campus</h2>
            <p>
              Do you want to receive a quality education according to advanced
              curricula in academic buildings furnished with the latest modern
              equipment?
            </p>
            <div className={styled.cards}>
              <div className={styled.bigCards}>
                <img src={hall} alt="photo" />
                <div className={styled.textDiv}>
                  <h3>Conference hall</h3>
                </div>
              </div>
              <div className={styled.miniCards}>
                <div className={styled.card}>
                  <div className={styled.imgDiv}>
                    <img src={lab} alt="photo" />
                  </div>
                  <div className={styled.textDiv}>
                    <h3>PC lab</h3>
                  </div>
                </div>
                <div className={styled.card}>
                  <div className={styled.imgDivs}>
                    <img src={libary} alt="photo" />
                  </div>
                  <div className={styled.textDiv}>
                    <h3>Library </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.bottonCards}>
              <div className={styled.cardd}>
                <img src={comp} alt="photo" />
                <div>
                  <h3>Discussion room</h3>
                </div>
              </div>
              <div className={styled.cardd}>
                <img src={table} alt="photo" />
                <div>
                  <h3>Kitchen</h3>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default Campus;
