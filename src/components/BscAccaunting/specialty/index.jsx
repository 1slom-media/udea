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
                This course aims to provide students with the personal and professional skills and knowledge required for a range of careers within the accountancy profession, finance sector, or a financial role in industry or the public sector. The ability to apply theory to practice, placing accounting and finance problems in a real-world context is a distinctive feature of this course.
                </p>
                <h2>Main study themes</h2>
                <ul>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Principles of Financial Accounting</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Principles of Management Accounting</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Principles of Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Mathematics and Statistics</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Business Economics</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Entrepreneurial Thinking</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    Our teaching has a strong focus on merging theory and practice. You will be engaged in simulation and practical exercises, such as preparing and analysing financial statements or assessing financial investment options, giving you the opportunity to apply theory to real-life scenarios that professional accountants encounter on a day-to-day basis.</p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>After training</h2>
                <p>
                You should have the confidence to give sound financial advice and make effective financial decisions. You should be well placed to pursue a wide variety of potential future careers options in areas such as: <br />
-Finance <br />
-Management <br />
-Accounting <br />
-Banking <br />
-Personal and corporate finance <br />
-Business <br />
-Education in private, public and third sector organisations.
<br /> <br />

Alternatively, this course could set you on the path towards further study for a professional qualification as a Chartered Accountant.
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
