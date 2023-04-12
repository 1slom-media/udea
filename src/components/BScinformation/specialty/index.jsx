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
                This course is adaptive, responding to the demands of global business to equip graduates with the required knowledge and skills to fulfil business needs. The course explores topical areas such as Programming, Data Bases, Digital Marketing, Business Fundamentals, Cyber Security, Modern and Big Data, compliance and professional issues. <br /> <br />The key competencies developed by the course include skills in critical analysis; application of software development, communication with technical and none technical audiences, theories and concepts to diverse real-world scenarios, intercultural competences and digital literacy.
                </p>
                <h2>Main study themes</h2>
                <ul>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Digital Marketing</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Introduction to Operating Systems, Networks and Cyber Security</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Business Decision making</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Web Development</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Creating a Venture</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    The progression requirements are based on the UDEA regulations:
<br /> <br />
- To progress from Level 4 to Level 5 students must obtain at least 100 credits at level 4 and must pass the following level 4 modules: Business Fundamentals; Introduction to Operating Systems, Networks and Cyber Security; ITB ALL Project 1; ITB ALL Project 2; Fundamentals of Business Programming; and Software Design.
<br /> <br />
- To progress from Level 5 to Level 6 students must obtain at least 100 credits at level 5 and must pass the following level 5 modules: Enterprise Project; Network Planning and Management; People and Computing; Operational Research and Simulation, and Web Development.
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
