import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "./../state/actions";
import Breadcrumb from "../components/breadcrumb";
import Card from "../components/card";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  const section = "Dashboard";
  const title = "Tools";

  return (
    <>
      <Breadcrumb
        section={section}
        title={title}
        countTotal={6}
        countCompleted={3}
        countSuccess={1}
        countWarning={1}
        countDanger={1}
      />
      <Card />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
