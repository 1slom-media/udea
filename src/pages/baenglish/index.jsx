import { useEffect } from "react";
import BaEnglishComponent from "../../components/BAenglish";

function BaEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BaEnglishComponent />
    </>
  );
}

export default BaEnglish;