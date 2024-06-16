import { Members } from "components/Members";
import Image from "next/image";

const Home = () => {
  const members = [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Members members={members} />
    </main>
  );
};

export default Home;
