/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: 上の行のコメントは削除すること。

import UserDetailDialog from '../UserDetailDialog'

type Props = {
	// TODO: anyではなく、適切な型を指定すること。
	tableData: any[]
}
/**
 * ユーザーリストテーブル
 * @param tableData - ユーザーリストデータ
 * @returns ユーザーリストテーブル
 */
function UserListTable({ tableData }: Props): JSX.Element {
	// 状態管理

	console.log(tableData) // TODO: デバッグコードは削除

	return (
		// APIのレスポンスをテーブル形式で表示
		<>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={tdStyle}></td>
					</tr>
				</tbody>
			</table>

			{/* TODO: 
				- ユーザー詳細ダイアログを表示する
				- IDを渡し、ユーザー詳細ダイアログを開く
			*/}
			<UserDetailDialog open={false} onClose={() => {}} />
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
