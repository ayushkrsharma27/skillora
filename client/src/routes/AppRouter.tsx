import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import StudentRegister from "../pages/StudentRegister";
import CompanyRegister from "../pages/CompanyRegister";
import VerifyCertificate from "../pages/VerifyCertificate";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route
          path="/verify-certificate"
          element={<VerifyCertificate />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}