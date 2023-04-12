import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";

function Specialty() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <div className={styled.megacard}>
              <div className={styled.about}>
                <h2>О специальности</h2>
                <p className={styled.subtext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown pr
                  1inter took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <ul>
                  <li>
                    <div></div>
                    <p>
                      <span>Lorem Ipsum</span> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's
                    </p>
                  </li>
                  <li>
                    <div></div>
                    <p>
                      <span>Lorem Ipsum</span> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Содержание курса</h2>
                <ul>
                  <li>
                    <h3>1 год</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </li>
                  <li>
                    <h3>1 год</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>После обучения</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div className={styled.categories}>
                  <ul>
                    <li>lorem ispum</li>
                    <li>lorem ispum</li>
                    <li>lorem ispum</li>
                  </ul>
                  <ul>
                    <li>lorem ispum</li>
                    <li>lorem ispum</li>
                    <li>lorem ispum</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styled.minicard}>
              <ul>
                <li>
                  <h2>4 years</h2>
                  <p>Duration of study</p>
                </li>
                <li>
                  <h2>full-time/distance learning</h2>
                  <p>Duration of study</p>
                </li>
                <li>
                  <h2>Uzbek</h2>
                  <p>Language of education</p>
                </li>
                <li>
                  <h2>Testing</h2>
                  <p>Exam form</p>
                </li>
                <li>
                  <h2>Mathematics, logic, english language</h2>
                  <p>Entrance exams</p>
                </li>
                <div className={styled.scroll}>
                  <li>
                    <h2>9 900 000 UZS</h2>
                    <p>for full-time form of education</p>
                  </li>
                  <li>
                    <h2>6 600 000 UZS</h2>
                    <p>for part-time form of education</p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </WrapperContainerFull>
      </div>
    </>
  );
}

export default Specialty;
