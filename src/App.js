import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ZalogujSi from "./pages/ZalogujSi";
import MjProfilEdycjaSekcji from "./pages/MjProfilEdycjaSekcji";
import MjProfil from "./pages/MjProfil";
import MojeCVUlubione from "./pages/MojeCVUlubione";
import MojeCVWszystkie from "./pages/MojeCVWszystkie";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mjprofil-edycjasekcji":
        title = "";
        metaDescription = "";
        break;
      case "/mjprofil":
        title = "";
        metaDescription = "";
        break;
      case "/mojecv-ulubione":
        title = "";
        metaDescription = "";
        break;
      case "/mojecv-wszystkie":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ZalogujSi />} />
      <Route path="/mjprofil-edycjasekcji" element={<MjProfilEdycjaSekcji />} />
      <Route path="/mjprofil" element={<MjProfil />} />
      <Route path="/mojecv-ulubione" element={<MojeCVUlubione />} />
      <Route path="/mojecv-wszystkie" element={<MojeCVWszystkie />} />
    </Routes>
  );
}
export default App;
