import { useEffect } from "react";
import BscAccountingComponent from "../../components/BscAccaunting";

function BscAccounting() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BscAccountingComponent />
    </>
  );
}

export default BscAccounting;