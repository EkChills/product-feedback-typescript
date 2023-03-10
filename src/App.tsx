import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditFeedback from "./pages/EditFeedback"
import FeedbackDetail from "./pages/FeedbackDetail"
import NewFeedback from "./pages/NewFeedback"
import Roadmap from "./pages/Roadmap"
import Suggestions from "./pages/Suggestions"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suggestions />} />
        <Route path="/suggestions/:id" element={<FeedbackDetail />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeedback />} />
        <Route path="road-map" element={<Roadmap />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  )
}

export default App