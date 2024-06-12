import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import SuggestedDeveloperPage from './pages/SuggestedDeveloperPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import EditHeadProfileModal from './components/Modal/EditHeadProfileModal';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/post-portfolio" element={<HomePage />} />
      <Route path="/profile/:name" element={<ProfilePage />} />
      <Route path="/suggested-developer/all" element={<SuggestedDeveloperPage />} />
      <Route path="/api/posts/:id" element={<HomePage />} />
      <Route path="/profile/api/post/:id" element={<ProfilePage />} />
      <Route path="/portfolio-detail/:id" element={<PortfolioDetailPage />} />
      <Route path="/modal" element={<EditHeadProfileModal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
