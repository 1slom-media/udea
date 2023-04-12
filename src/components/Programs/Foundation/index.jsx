import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Foundation() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <div className={styled.headerTexts}>
              <div>
                <h2>Foundation</h2>
              </div>
              <div>
                <h2>BA (Hons)</h2>
              </div>
            </div>
            <h2 className={styled.mediaSubtext}>Foundation</h2>
            <div className={styled.cards}>
              <div className={styled.card}>
                <div>
                  <div className={styled.lang}>
                    <p>Consectetur adipiscing</p>
                    <p>EN</p>
                  </div>
                  <h3 className={styled.h3subtext}>Digital Technologies</h3>
                </div>
                <div className={styled.buttons}>
                  <button>Etiam eu turpis</button>
                  <button>Etiam</button>
                </div>
              </div>
              <div className={styled.mediaDiv}>
                <h2 className={styled.mediaSubtextt}>BSc (Hons)</h2>
              </div>
              <div className={styled.card}>
                <div>
                  <div className={styled.lang}>
                    <p>Consectetur adipiscing</p>
                    <p>EN</p>
                  </div>
                  <h3 className={styled.h3subtext}>
                    English language and TEFL
                  </h3>
                </div>
                <div className={styled.buttons}>
                  <button>Etiam eu turpis</button>
                  <button>Etiam</button>
                </div>
              </div>
            </div>
            <div className={styled.headerTexts}>
              <div>
                <h2>BSc (Hons)</h2>
              </div>
            </div>
            <h2 className={styled.mediaSubtexts}>BSc (Hons)</h2>
            <div className={styled.Bccards}>
              <div className={styled.card}>
                <div>
                  <div className={styled.lang}>
                    <p>Consectetur adipiscing</p>
                    <p>EN</p>
                  </div>
                  <h3 className={styled.h3subtext}>Accounting and Finance</h3>
                </div>
                <div className={styled.buttons}>
                  <button>Etiam eu turpis</button>
                  <button>Etiam</button>
                </div>
              </div>
              <div className={styled.card}>
                <div>
                  <div className={styled.lang}>
                    <p>Consectetur adipiscing</p>
                    <p>EN</p>
                  </div>
                  <h3 className={styled.h3subtext}>
                    International Finance and Banking
                  </h3>
                </div>
                <div className={styled.buttons}>
                  <button>Etiam eu turpis</button>
                  <button>Etiam</button>
                </div>
              </div>
              <div className={styled.Lastcard}>
                <div>
                  <div className={styled.lang}>
                    <p>Consectetur adipiscing</p>
                    <p>EN</p>
                  </div>
                  <h3 className={styled.h3subtext}>
                    Information Technology for Business
                  </h3>
                </div>
                <div className={styled.buttons}>
                  <button>Etiam eu turpis</button>
                  <button>Etiam</button>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default Foundation;
