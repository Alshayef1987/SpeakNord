import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import DemoPage from "./pages/DemoPage";
import TestAppPage from "./pages/TestAppPage";
import AddCompanyPage from "./pages/AddCompanyPage";
import CompanyListPage from "./pages/CompanyListPage";
import FeedbackPage from "./pages/FeedbackPage";
import EditCompanyPage from "./pages/EditCompanyPage";
import FeedbackListPage from "./pages/FeedbackListPage";


import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/test" element={<TestAppPage />} />
        <Route path="/add-company" element={<AddCompanyPage />} />
        <Route path="/companies" element={<CompanyListPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/edit-company/:id" element={<EditCompanyPage />} />
        <Route path="/feedback-list" element={<FeedbackListPage />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;