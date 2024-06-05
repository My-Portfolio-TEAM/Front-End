import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='/write-progress' element={<HomePage />} />
			<Route path='/post-portfolio' element={<HomePage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
