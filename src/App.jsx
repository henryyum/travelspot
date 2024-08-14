import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Layout from "./Components/Layout";
import Destinations from "./Components/Explore/Destinations";
import ToursPage from "./Components/Tours/ToursPage";
import BlogsPage from "./Components/Blogs/BlogsPage";
import AboutPage from "./Components/About/AboutPage";
import SignUpPage from "./Components/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
