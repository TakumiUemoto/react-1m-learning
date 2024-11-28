import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserListTableSample from './components/UserListTableSample'

// データスキーマ（https://jsonplaceholder.typicode.com/users）
// CAUTION: データスキーマはデータ取得APIのレスポンスに合わせる
export type UserSample = {
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

/**
 * 第二週目の課題：ユーザーリスト画面
 * @returns ユーザーリスト画面
 */
function UsersSample(): JSX.Element {
	// ロジック・状態管理
	const [userListData, setUserListData] = useState<UserSample[]>([])

	// 初回レンダリング時にユーザーリストを取得する
	useEffect(() => {
		const fetchUserList = async () => {
			try {
				const apiUrl = import.meta.env.VITE_API_URL_USERS_GET
				const res = await fetch(apiUrl).then((res) => res.json())
				setUserListData(res)
			} catch (error) {
				console.error(error)
			}
		}

		return () => {
			fetchUserList()
		}
	}, [])

	return (
		<>
			<h2>ユーザーリスト</h2>
			<UserListTableSample tableData={userListData} />

			<div style={{ marginTop: '2rem' }}>
				<Link to="/">- Home -</Link>
			</div>
		</>
	)
}

export default UsersSample
