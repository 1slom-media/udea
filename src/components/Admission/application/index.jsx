import { WrapperContainer } from "../../../App-styled";
import HomeCarusel from "../../Home/homeCarusel";
import { Bx } from "./style-index";
import styled from "./style.module.css";
function Application() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <div className={styled.BigCard}>
              <h2>Undergraduate application deadlines</h2>
              <div className={styled.winters}>
                <h3 className={styled.subtext}>Winter</h3>
                <div className={styled.dates}>
                  <div className={styled.march}>
                    <h3>21 March, 2023</h3>
                    <p>Uzbekistan students apply </p>
                  </div>
                  <div className={styled.mar}>
                    <h3>21 March, 2023</h3>
                    <p>Class start date:</p>
                  </div>
                </div>
              </div>
              <div className={styled.winter}>
                <h3 className={styled.subtext}>Summer</h3>
                <div className={styled.dates}>
                  <div className={styled.march}>
                    <h3>21 March, 2023</h3>
                    <p>Uzbekistan students apply </p>
                  </div>
                  <div className={styled.mar}>
                    <h3>21 March, 2023</h3>
                    <p>Class start date:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.dectriction}>
              <div className={styled.eligibity}>
                <h3>Eligibility</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it when an unknown
                  printer took a galley of type and scrambled it{" "}
                </p>
              </div>
              <div className={styled.documants}>
                <h3>Documents</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div className={styled.requir}>
              <h3>Requirements</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className={styled.buttons}>
              <button>
                Explore programs
                <Bx>
                  <i class="bx bx-chevron-right"></i>
                </Bx>
              </button>
              <button>
                Click here to apply
                <Bx>
                  <i class="bx bx-chevron-right"></i>
                </Bx>
              </button>
            </div>
          </div>
        </WrapperContainer>
      </div>
      <HomeCarusel />
    </>
  );
}

export default Application;
