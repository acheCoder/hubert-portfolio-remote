import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/app/context/LanguageContext';
import MainLayout from '@/app/layouts/MainLayout';
import HomePage from '@/pages/Home/Home.page';
import ExperiencePage from '@/pages/Experience/Experience.page';
import AboutPage from '@/pages/About/About.page';
import ContactPage from '@/pages/Contact/Contact.page';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/experiencia" element={<ExperiencePage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;