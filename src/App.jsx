import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import { isPreloadAsync } from './states/isPreload/isPreloadThunk';

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
    <>
      <Routes>
        {!token ? (
          <>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        ) : (
          <>
            <Route index element={<HomePage />} />
            <Route path="/profile/myProfile" element={<ProfilePage />} />
            <Route path="/portfolio-detail/:id" element={<PortfolioDetailPage />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
