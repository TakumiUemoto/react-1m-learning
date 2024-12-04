import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserListTable from './components/UserListTable'

/**
 * 第二週目の課題：ユーザーリスト画面
 * @returns ユーザーリスト画面
 */
function Users(): JSX.Element {
	// ロジック・状態管理

	// 初回描画時にユーザーリストを取得
	useEffect(() => {
		const fetchUserList = async () => {
			const apiUrl = import.meta.env.VITE_API_URL_USERS_GET
			// TODO: ユーザーリストを取得し、stateに格納して扱う
			console.log(apiUrl) // TODO: こちらは削除
		}

		return () => {
			fetchUserList()
		}
	}, [])
	return (
		<>
			<h2>ユーザーリスト</h2>
			{/* TODO: 
				- ユーザーリストを表示するテーブルを実装する（コンポーネント化推奨）
				- APIから取得したデータを渡すこと。
			*/}
			<UserListTable tableData={[]} />

			<div style={{ marginTop: '2rem' }}>
				<Link to="/">- Home -</Link>
			</div>
		</>
	)
}

export default Users
