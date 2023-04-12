import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";
function DigitialHeader() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <div className={styled.Texts}>
              {/* <h2>Agribusiness and Investment Activity</h2> */}
              <p>
              BSc Information Technology for Business
              </p>
            </div>
            <div className={styled.box}>
              {/* <h2>Lorem Ipsum</h2> */}
              <ul>
                <li>
                  <h3>
                    <i class="bx bx-health"></i>
                  </h3>
                  <p>Opportunity to get educational grants</p>
                </li>
                <li>
                  <h3>
                    <i class="bx bx-health"></i>
                  </h3>
                  <p>
                    Opportunity to participate in international projects and
                    internships
                  </p>
                </li>
                <li>
                  <h3>
                    <i class="bx bx-health"></i>
                  </h3>
                  <p>
                    Study only the necessary subjects according to the Inhidual
                    development plan
                  </p>
                </li>
                <li>
                  <h3>
                    <i class="bx bx-health"></i>
                  </h3>
                  <p>Promising career opportunities</p>
                </li>
              </ul>
            </div>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default DigitialHeader;
