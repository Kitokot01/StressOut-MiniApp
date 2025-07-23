import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsentPage from '../pages/ConsentPage';
import Welcome from '../pages/Welcome';
import MainMenu from '../pages/MainMenu';
import SpecialistCategoryPage from '../pages/SpecialistCategoryPage';
import SpecialistList from '../pages/SpecialistList';
import SpecialistDetailPage from '../pages/SpecialistDetailPage';
import AboutPage from '../pages/AboutPage';
import ForSeafarersPage from '../pages/ForSeafarersPage';
import SupportPage from '../pages/SupportPage';
import SeafarersBookingPage from '../pages/SeafarersBookingPage';
import BookingPage from '../pages/BookingPage';
import ThankYouPage from '../pages/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsentPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/main" element={<MainMenu />} />
        <Route path="/categories" element={<SpecialistCategoryPage />} />
        <Route path="/specialists/:category" element={<SpecialistList />} />
        <Route path="/detail/:id" element={<SpecialistDetailPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/for-seafarers" element={<ForSeafarersPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/seafarers-booking" element={<SeafarersBookingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
