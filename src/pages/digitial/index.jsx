import { useEffect } from "react";
import DigitialComponent from "../../components/Digitial";

function Digitial() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <DigitialComponent />
    </>
  );
}

export default Digitial;