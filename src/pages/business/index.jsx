import { useEffect } from "react";
import BusinessComponent from "../../components/Business";

function Business() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BusinessComponent />
    </>
  );
}

export default Business;
