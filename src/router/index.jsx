import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { DataRouter } from "./data-router";

function AllRouters() {
  return (
    <>
      <Header />
      <Routes>
        {DataRouter.map((elem, index) => (
          <Route key={index} path={elem.path} element={elem.Element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default AllRouters;
