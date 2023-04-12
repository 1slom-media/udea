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
                This is a modern, forward-looking course aimed at equipping students not just with 'traditional' English language and linguistics subject knowledge and teaching skills, but also with the awareness and technological know-how that will enable them to take advantage of the 21st century tools that enrich teaching and learning. <br /> <br />
The course gives students opportunities to develop skills through authentic teaching practice, leading to a Cambridge English teaching qualification, and to become articulate, knowledgeable and creative graduates.
                </p>
                <h2>Main study themes</h2>
                <ul>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Language, Literature and Writing Through Time</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Key Concepts in English and Languages</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Space, Place, Regionalisms, Globalisms</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Language and Society</span>
                    </p>
                  </li>
                  <li>
                    <img src={bank} />
                    <p>
                      <span>Language and New Media</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.content}>
                <h2>Course content</h2>
                <ul>
                  <li>
                    <p>
                    A key feature of the course is the opportunity to gain a Cambridge English teaching qualification (Certificate in English Language Teaching to Adults (CELTA) or Teaching Knowledge Test (TKT)) integrated into Level 2 to have a positive impact on employability and positive destination metrics. The hands-on teacher-training components distributed over the three levels underline the vocational aspect of the course, and employability is also addressed specifically in separate level 2 and level 3 10-credit modules.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styled.after}>
                <h2>After training</h2>
                <p>
                English Language and TEFL graduates can also pursue a variety of post-graduate studies; many go on to train as school teachers through PGCE and School Direct programmes, and the classroom teaching hours they accumulate through this degree prepares them well for this. They can also go on to work in a range of fields within the Arts and Cultural, Digital, Creative and Business sectors
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
