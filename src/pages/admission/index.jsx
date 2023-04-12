import { useEffect } from "react";
import AdmissionComponent from "../../components/Admission";

function Admission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AdmissionComponent />
    </>
  );
}

export default Admission;
