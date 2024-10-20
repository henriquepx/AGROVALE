import CardHome from "./components/CardHome";
import Timeline from "./components/Timeline";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Team from "./layout/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <CardHome />
      <Team />
      <Timeline />
    </div>
  );
}
