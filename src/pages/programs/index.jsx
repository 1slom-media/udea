import { useEffect } from "react";
import ProgramsComponent from "../../components/Programs";

function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProgramsComponent />
    </>
  );
}

export default Programs;
