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
                The course aims to provide graduates with the skills, knowledge and understanding needed for a career in the finance sector, including banks, other financial institutions and wider finance-related fields. 
<br /> <br />
The main focus of this degree is to provide students with an opportunity to acquire a comprehensive knowledge of the functions of financial markets and the banking system in the context of a global economy, whilst also learning how to evaluate theories of banking and apply them to resolve practical problems.
                </p>
                <h2>Main study themes</h2>
                <ul>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Principles of Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Business Accounting for Decision Making</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>English Skills for Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Employability Skills in Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Governance and Ethics in Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Software Applications in Finance</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Quantitative Analysis</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    With a strong focus on applying learning to practical situations, this course involves rigorous banking and regulation-based modules which should help to prepare you for potential work in the sector. Throughout the course, modules should allow you the op
<br /> <br />
portunity to work on real case studies and explore tackling specific issues faced by banks in the global banking environment, using the skills you have learned to look at proposing recommendations on how to solve the problems.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>After training</h2>
                <p>
                Level 4 of this course is shared with the BSc (Hons) Accounting and Finance course and on successful completion of the Level 4, students will have the opportunity to continue studying toward the BSc International finance and Banking Degree or switch to the BSc (Hons)  and Finance course.
<br /> <br />
Students could also have the opportunity to participate in international activities such as Collaborative Online International Learning (COIL) projects designed to allow students on the course to engage with students at partner institutions on subject specific topics. These projects aim to enable students to become ‘global’ graduates with an understanding of cultures, languages and belief systems other than their own, so they may make a positive contribution to an increasingly multi-cultural, connected and complex world.
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
