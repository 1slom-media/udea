import HomeCarusel from "../Home/homeCarusel";
import AboutCovetry from "./about";
import CoventryHeader from "./header";
import TeachersCoventry from "./teachers";

function CoventryComponent() {
  return (
    <>
      <CoventryHeader />
      <AboutCovetry />
      <TeachersCoventry />
      <HomeCarusel />
    </>
  );
}

export default CoventryComponent;
