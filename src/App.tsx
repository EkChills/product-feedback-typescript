import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditFeedback from "./pages/EditFeedback"
import FeedbackDetail from "./pages/FeedbackDetail"
import NewFeedback from "./pages/NewFeedback"
import Roadmap from "./pages/Roadmap"
import Suggestions from "./pages/Suggestions"
import { AnimatePresence } from "framer-motion";

const App = () => {
  
interface LocationState {
  from: {
    pathname: string;
  };
}
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Suggestions />} />
        <Route path="/suggestions/:id" element={<FeedbackDetail />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeedback />} />
        <Route path="road-map" element={<Roadmap />} />
      </Routes>
      <ToastContainer position="top-center" />
      </AnimatePresence>
  )
}

export default App