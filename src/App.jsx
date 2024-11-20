import Header from "./components/header.jsx";
import SectionSlider from "./components/section.jsx";
import SectionClients from "./components/section-client.jsx";
import Manage from "./components/section-manage.jsx";
import Pixelgrade from "./components/section-pixelgrade.jsx";
import Helping from "./components/section-helping.jsx";
import SiteFooter from "./components/section-site.jsx";
import TimSmith from "./components/section-tim-smith.jsx";
import Pellentesque from "./components/section-Pellentesque.jsx";
import Footer from "./components/footer.jsx";
import Marketing from "./components/section-marketing.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <SectionSlider />
        <SectionClients />
        <Manage />
        <Pixelgrade />
        <Helping />
        <SiteFooter />
        <TimSmith />
        <Marketing />
        <Pellentesque />
      </div>
      <Footer />
    </>
  );
}

export default App;
