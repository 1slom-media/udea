import { useEffect } from "react";
import FoundationComponent from "../../components/FoundationAccounting";

function Foundation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FoundationComponent />
    </>
  );
}

export default Foundation;