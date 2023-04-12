import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";
import bank from '../../../assets/study/bank.svg'

function Specialty() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainerFull>
          <div className={styled.Wrapper}>
            <div className={styled.megacard}>
              <div className={styled.about}>
                <h2>Course overview</h2>
                <p className={styled.subtext}>
                This course aims to provide the fundamental knowledge and skill set in a range of mathematical and business principles, as well as the theories and concept involved in investment risk and professional ethics. The aim of the course is to help graduates begin a career in accounting and finance.
                </p>
                <h2>Main study themes</h2>
                <ul>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Introduction to Business and Management</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Academic skills for Accounting and Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Accounting and Spreadsheets</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Cost, Revenue and Professional Ethics</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Investment and Risk</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    The course will consider the range of skills required for successful academic study and provide students with an opportunity to develop these skills within a supportive and culturally sensitive environment. A clear focus will be on application, practice and feedback from peers and tutors throughout the module. <br /> <br />

The Students will study a module to contextualise their studies to the Uzbekistan market and also, enable them to understand basic principles of business, imperative in the application of accounting and financial knowledge.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>After training</h2>
                <p>
                The course is taught in 2 semesters with learners studying 3 modules in the 1st semester and 2 modules in the 2nd semester. Students should study Academic skills for Accounting and Finance, Introduction to Business and Management and Accounting and Spreadsheets in their first semester and then, Cost, Revenue and Professional Ethics and Investment and Risk in their second semester.
                </p>
              </div>
            </div>
            <div className={styled.minicard}>
              <ul>
                <li>
                  <h2>3 year</h2>
                  <p>Duration of study</p>
                </li>
                <li>
                  <h2>full-time</h2>
                  <p>Duration of study</p>
                </li>
                <li>
                  <h2>English</h2>
                  <p>Language of education</p>
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
