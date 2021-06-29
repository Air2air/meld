
import Link from "next/link";
import Card from "../components/card";

const Index = () => {
  const section = "Dashboard";
  const title = "Tools";

  return (
    <>
      <Card />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
