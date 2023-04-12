import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";

function AboutCovetry() {
  return (
    <div className={styled.WrapperBack}>
      <WrapperContainer>
        <div className={styled.Wrapper}>
          <div className={styled.bigCard}>
            <h2>About Coventry University</h2>
            <p className={styled.subtext}>
              Coventry University is one of the UK’s top universities, with an
              ever-increasing global presence.
            </p>
            <p className={styled.subtextP}>
              With offices in China, Singapore, Dubai, Kenya, Nigeria and
              Pakistan, and world leading research and academic partners on
              every continent, our students are gaining life changing
              experiences all over the world.
            </p>
          </div>

          <div className={styled.avaregeCards}>
            <div className={styled.card}>
              <h2>History</h2>
              <p>
                Established in 1843 as the Coventry College of Design, we’ve
                been educating students for over 175 years. With our heritage in
                manufacturing, engineering and the arts, our passion for
                educating students extends to health and life sciences and
                business and law.
              </p>
            </div>
            <div className={styled.card}>
              <h2>Size</h2>
              <p>
                With over 50,000 learners currently studying one of our degrees
                worldwide, working in collaboration with over 70 partner
                institutions in over 40 countries, we are a truly global
                university.
              </p>
            </div>
          </div>

          <div className={styled.bottomCard}>
            <p>
              <span>Coventry University</span> is one of the largest
              Universities in the UK with more than
              <span> 275 000 graduates </span> all around the world.
            </p>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default AboutCovetry;
