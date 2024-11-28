import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App'
import Counter from '../../features/Counter'
import Users from '../../features/2_users'
import UsersSample from '../../features/2_users_sample'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users-sample" element={<UsersSample />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
