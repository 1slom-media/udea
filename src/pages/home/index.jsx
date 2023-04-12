import { useEffect } from "react";
import HomeComponent from "../../components/Home";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeComponent />
    </>
  );
}

export default Home;
