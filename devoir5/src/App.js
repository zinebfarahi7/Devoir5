import React from "react";
import { Routes, Route } from "react-router-dom"; // plus besoin d'importer BrowserRouter ici
import Accueil from "./Pages/Accueil";
import Contact from "./Pages/Contact";
import Mentions from "./Pages/Mentions";
import Services from "./Pages/Services";
import Realisations from "./Pages/Realisations";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NotFound = () => {
  return <h2>Page non trouvée</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;