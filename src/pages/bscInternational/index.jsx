import { useEffect } from "react";
import BscInternationalComponent from "../../components/BscInternatiol";

function BscInternatiol() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BscInternationalComponent />
    </>
  );
}

export default BscInternatiol;