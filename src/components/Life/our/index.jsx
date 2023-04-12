import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";

function Our() {
  return (
    <WrapperContainer>
      <div className={styled.Wrapper}>
        <h2>
          <span>Our</span> goal is to provide students with a sense of belonging
          and integration to UDEA and the campus community.
        </h2>
        <iframe
          width="885"
          height="498"
          src="https://www.youtube.com/embed/p1GmFCGuVjw"
          title="How To Make A Website With Login And Register | HTML CSS &amp; Javascript"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </WrapperContainer>
  );
}

export default Our;
