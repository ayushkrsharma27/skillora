import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentRegister from "../pages/auth/StudentRegister";
import GetStarted from "../pages/auth/GetStarted";
import CompanyRegister from "../pages/auth/CompanyRegister";
import StudentDashboard from "../pages/dashboard/StudentDashboard";


import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Login from "../pages/auth/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/student-register"
          element={<StudentRegister />}
        />
        <Route
          path="/get-started"
          element={<GetStarted />}
        />
        <Route
          path="/company-register"
          element={<CompanyRegister />}
        />

        <Route
          path="/dashboard"
          element={<StudentDashboard />}
        />
      </Routes>

    </BrowserRouter>
  );
}