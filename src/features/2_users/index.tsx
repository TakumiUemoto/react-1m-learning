import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserListTable from './components/UserListTable'

export type User = {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

const fetchPosts = async (): Promise<User[]> => {
	console.log('fetching-start')

	const res = await fetch('https://jsonplaceholder.typicode.com/users')

	console.log('fetching-finish')
	return res.json()
}

/**
 * 第二週目の課題：ユーザーリスト画面
 * @returns ユーザーリスト画面
 */
function Users(): JSX.Element {
	// ロジック・状態管理

	const [user, setUser] = useState<User[]>([])

	// 初回描画時にユーザーリストを取得
	useEffect(() => {
		;(async function () {
			const data = await fetchPosts()
			setUser(data)
		})()
	}, [])

	return (
		<>
			<h2>ユーザーリスト</h2>
			{/* TODO: 
				- ユーザーリストを表示するテーブルを実装する（コンポーネント化推奨）
				- APIから取得したデータを渡すこと。
			*/}
			<UserListTable tableData={user} />

			<div style={{ marginTop: '2rem' }}>
				<Link to="/">- Home -</Link>
			</div>
		</>
	)
}

export default Users
