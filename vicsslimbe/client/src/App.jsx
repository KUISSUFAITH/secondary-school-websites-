<<<<<<< HEAD
import React from "react";
=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PreFooter from "./components/PreFooter";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Programs from "./pages/Programs";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
