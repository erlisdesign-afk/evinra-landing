import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvinraHomepage from "./EvinraHomepage";
import OfflinePOS from "./pages/OfflinePOS";
import WhiteLabelTicketing from "./pages/WhiteLabelTicketing";
import MultiGateCheckIn from "./pages/MultiGateCheckIn";
import MultiVendorCash from "./pages/MultiVendorCash";
import UnifiedReporting from "./pages/UnifiedReporting";
import VsTicketSocket from "./pages/VsTicketSocket";
import OurStory from "./pages/OurStory";
import FieldResults from "./pages/FieldResults";
import Hardware from "./pages/Hardware";
import RequestDemo from "./pages/RequestDemo";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EvinraHomepage />} />
        <Route path="/features/offline-event-pos" element={<OfflinePOS />} />
        <Route path="/features/white-label-ticketing" element={<WhiteLabelTicketing />} />
        <Route path="/features/multi-gate-check-in" element={<MultiGateCheckIn />} />
        <Route path="/features/multi-vendor-cash-management" element={<MultiVendorCash />} />
        <Route path="/features/unified-financial-reporting" element={<UnifiedReporting />} />
        <Route path="/compare/ticketsocket-alternative" element={<VsTicketSocket />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/field-results" element={<FieldResults />} />
        <Route path="/hardware-requirements" element={<Hardware />} />
        <Route path="/request-a-demo" element={<RequestDemo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
