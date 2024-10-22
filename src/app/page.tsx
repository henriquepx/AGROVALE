import CardHome from "./components/CardHome";
import Timeline from "./components/Timeline";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Team from "./layout/Team";
import Footer from "./layout/Footer";
// import Video from "./components/Video";
import CardImportExport from "./components/CardImportExport";
import Contact from "./layout/Contact";
import CardPimenta from "./components/CardPimenta";
import CardCall from "./components/CardCall";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <CardHome />
      <Team />
      <CardImportExport />
      <CardPimenta />
      <Timeline />
      {/* <Video /> */}
      <CardCall />
      <Contact />
      <Footer />
    </div>
  );
}
