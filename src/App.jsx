import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import SuggestedDeveloperPage from './pages/SuggestedDeveloperPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import EditHeadProfileModal from './components/Modal/EditHeadProfileModal';
import { isPreloadAsync } from './states/isPreload/isPreloadThunk';
import Loading from './components/Loading';
import { myProfileAsync } from './states/myProfile/myProfileThunk';

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { isPreload } = useSelector((state) => state.isPreload);

  useEffect(() => {
    dispatch(isPreloadAsync());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <Routes>
      {!token ? (
        <>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      ) : (
        <Route index element={<HomePage />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
