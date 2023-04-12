import { useEffect } from "react";
import BscInfarmationComponent from "../../components/BScinformation";

function BscInfarmation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BscInfarmationComponent />
    </>
  );
}

export default BscInfarmation;