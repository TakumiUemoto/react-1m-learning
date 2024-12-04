/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: 上の行のコメントは削除すること。
import { useEffect, useState } from 'react'
import UserDetailDialog from '../UserDetailDialog'
import { User } from '../..'

type Props = {
	// TODO: anyではなく、適切な型を指定すること。
	tableData: User[]
}
/**
 * ユーザーリストテーブル
 * @param tableData - ユーザーリストデータ
 * @returns ユーザーリストテーブル
 */
function UserListTable({ tableData }: Props): JSX.Element {
	// 状態管理
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
	// const [user, setUser] = useState<User[]>([]);
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	(async function () {
	// 	  const data = await fetchPosts();

	// 	  setUser(data);
	// 	  setIsLoading(false);
	// 	})();
	//   }, []);

	const selUserID = (id: number) => {
		setSelectedUserId(id)
	}

	console.log(tableData) // TODO: デバッグコードは削除

	return (
		// APIのレスポンスをテーブル形式で表示
		<>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}></th>
						<th style={thStyle}>id</th>
						<th style={thStyle}>name</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((user) => {
						return (
							<tr>
								<td style={tdStyle}>
									<button
										onClick={() => {
											selUserID(user.id)
										}}
									>
										詳細
									</button>
								</td>

								<td style={tdStyle}>{user.id}</td>
								<td style={tdStyle}>{user.name}</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			{/* TODO: 
				- ユーザー詳細ダイアログを表示する
				- IDを渡し、ユーザー詳細ダイアログを開く
			*/}
			{/* ここの書き方がいまいちわからない　onClickの中に書かないのか？ */}
			{selectedUserId !== undefined && selectedUserId !== null && (
				<UserDetailDialog
					id={selectedUserId}
					tableData={tableData}
					open={true}
					onClose={() => setSelectedUserId(null)}
				/>
			)}
			{/* <UserDetailDialog open={false} onClose={() => {}} /> */}
		</>
	)
}

export default UserListTable

/**
 * CSS Properties
 */
const tableStyle: React.CSSProperties = {
	borderCollapse: 'collapse',
	width: '100%',
	margin: '1rem 0'
}
const thStyle: React.CSSProperties = {
	border: '1px solid #ddd',
	padding: '8px',
	textAlign: 'left',
	color: '#333',
	backgroundColor: '#f4f4f4'
}
const tdStyle: React.CSSProperties = {
	border: '1px solid #ddd',
	padding: '8px'
}
