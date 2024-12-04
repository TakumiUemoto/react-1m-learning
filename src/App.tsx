import './App.css'
import { Link } from 'react-router-dom'

function App() {
	return (
		<>
			<div>
				<h1>run: [vite + react + typescript]</h1>
				<h2>React 1ヶ月学習 アプリケーション作成課題ページ</h2>

				<h2>Page list</h2>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.5rem',
						padding: 0,
						listStyle: 'none',
						textAlign: 'left'
					}}
				>
					{/* Add page Link */}
					<li>
						<Link to="/counter">/counter</Link>
					</li>
					<li>
						<Link to="/users">/users</Link>
					</li>
				</ul>

				<h2>Sample Page list</h2>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.5rem',
						padding: 0,
						listStyle: 'none',
						textAlign: 'left'
					}}
				>
					<li>
						<Link to="/counter-sample">/counter-sample</Link>
					</li>
					<li>
						<Link to="/users-sample">/users-sample</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default App
