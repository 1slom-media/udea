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
                This course offers an introduction to the field of Digital technologies and provides students with enhanced digital literacy in a context which will be applicable worldwide, develops independent thinking and problem-solving skills and encourages collaboration through group activities. <br /> <br />Along with developing academic skills at a higher education level and preparing for a degree course, students will be given an opportunity to learn about basic computer hardware, software, networking and business procedures. This will develop and enhance their employability skills.
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
                      <span>Core Mathematics</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Software & Databases</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Networking and Communications</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Information Technology in Business</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    The course is taught in 2 semesters with learners studying 3 modules in the 1st semester and 2 modules in the 2nd semester. Students should study Core Mathematics, Information Technology in Business and Introduction to Business and Management in their first semester and then Software & Databases, Networking and Communications in their second semester.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>After training</h2>
                <p>
                Successful completion of the Foundation year will be used as a springboard into related courses within the UDEA portfolio, which is designed to provide graduates with the breadth of skills to be effective in the varied digital workplace. Students will develop self-management and self-development capabilities to enable them to keep pace with change and adapt to new technologies, software languages and connected systems. The course will prepare students to start a career in the field of study within a Small and Medium Enterprise (SME) or large organisation.
                </p>
              </div>
            </div>
            <div className={styled.minicard}>
              <ul>
                <li>
                  <h2>1 year</h2>
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
