import { useEffect } from "react";
import CoventryComponent from "../../components/coventry";

function Conventry() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CoventryComponent />
    </>
  );
}

export default Conventry;
