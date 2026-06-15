import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvinraHomepage from "./EvinraHomepage";
import OfflinePOS from "./pages/OfflinePOS";
import VsTicketSocket from "./pages/VsTicketSocket";
import OurStory from "./pages/OurStory";
import FieldResults from "./pages/FieldResults";
import Hardware from "./pages/Hardware";
import RequestDemo from "./pages/RequestDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EvinraHomepage />} />
        <Route path="/features/offline-event-pos" element={<OfflinePOS />} />
        <Route path="/compare/ticketsocket-alternative" element={<VsTicketSocket />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/field-results" element={<FieldResults />} />
        <Route path="/hardware-requirements" element={<Hardware />} />
        <Route path="/request-a-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
