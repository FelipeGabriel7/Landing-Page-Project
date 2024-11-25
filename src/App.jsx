import Footer from './components/Footer/Footer';
import { NavbarComponent } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TermsOfUse } from './Pages/Terms';
import { PrivacyPolicy } from './Pages/Politics';


function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/politicas" element={<PrivacyPolicy />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
