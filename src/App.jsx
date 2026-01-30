import { BrowserRouter, Route, Routes } from "react-router-dom";
import HtmlPage from "./components/HtmlPage";
import Home from "./screens/home/Home";
import AboutUs from "./screens/about-us/AboutUs";
import Prices from "./screens/prices/Prices";
import Team from "./screens/team/Team";
import TeamDetail from "./screens/team-detail/TeamDetail";
import Service from "./screens/services/Services";
import ServiceDetail from "./screens/service-detail/ServiceDetail";
import News from "./screens/news/News";
import Appointment from "./screens/appointment/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-detail" element={<TeamDetail />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<HtmlPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
