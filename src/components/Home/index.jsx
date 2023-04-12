import { WrapperContainer } from "../../App-styled";
import Categories from "./categories";
import Graduate from "./graduate";
import HomeCarusel from "./homeCarusel";
import HomeHero from "./homeHero";
import Request from "./request";
import Social from "./social";
import Study from "./study";

function HomeComponent() {
  return (
    <>
      <HomeHero />
      <WrapperContainer>
        <Categories />
      </WrapperContainer>
      <Graduate />
      <Study />
      <Social />
      <HomeCarusel />
      {/* <Request /> */}
    </>
  );
}

export default HomeComponent;
