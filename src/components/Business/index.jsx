import HomeCarusel from "../Home/homeCarusel";
import BottomMore from "../bottomMore";
import Faq from "./accordion";
import AdmissinBusiness from "./admission";
import BackCall from "./backCall";
import BusinessHeader from "./header";
import SocialBusness from "./social";
import Specialty from "./specialty";
import Teachers from "./teachers";

function BusinessComponent() {
  return (
    <>
      <BusinessHeader />
      <BackCall />
      <Specialty />
      <Teachers />
      <AdmissinBusiness />
      <SocialBusness />
      <BottomMore />
      <Faq />
      <HomeCarusel />
    </>
  );
}

export default BusinessComponent;
