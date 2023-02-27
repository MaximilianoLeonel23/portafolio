import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import MainTemplate from "./components/MainTemplate";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainTemplate/>}>
          <Route index element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/sobre-mi" element={<About />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
