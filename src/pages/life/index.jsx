import { useEffect } from "react";
import LifeComponent from "../../components/Life";

function Life() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LifeComponent />
    </>
  );
}

export default Life;
