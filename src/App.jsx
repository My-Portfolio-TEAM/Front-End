import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import SuggestedDeveloperPage from './pages/SuggestedDeveloperPage';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/post-portfolio' element={<HomePage />} />
			<Route path='/post-detail' element={<ProfilePage />} />
			<Route path={`/profile/:name`} element={<ProfilePage />} />
			<Route path='/suggested-developer/all' element={<SuggestedDeveloperPage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
