import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button
} from '@mui/material'
import { User } from '../..'
import { useCallback, useEffect, useState, Fragment } from 'react'

type Props = {
	// TODO: ユーザー情報を取得するための引数を定義
	id: number
	open: boolean
	onClose: () => void
	tableData: User[]
}

/**
 * ユーザー詳細ダイアログ
 * @param open - ダイアログの開閉状態
 * @param onClose - ダイアログを閉じる関数
 * @returns ユーザー詳細ダイアログ
 */
function UserDetailDialog({ open, onClose, id, tableData }: Props): JSX.Element {
	// TODO: propsで渡されたIDを元に単一のユーザー情報を取得する
	// path: ${import.meta.env.VITE_API_URL_USERS_GET}/${id}

	// 下記わからなかったためサンプルコードをそのまま使用
	// 値をフォーマットする
	const formatValue = (value: User[keyof User]): React.ReactNode => {
		if (typeof value === 'object') {
			const jsonStr = JSON.stringify(value)
			const items = jsonStr.slice(1, -1).split(',')

			return (
				<>
					{'{'}
					<br />
					{items.map((item, index) => (
						<Fragment key={index}>
							<span style={{ paddingLeft: '1rem' }}>{item}</span>
							<span>{index < items.length - 1 && <br />}</span>
						</Fragment>
					))}
					<br />
					{'}'}
				</>
			)
		}
		return String(value)
	}

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>ユーザー詳細</DialogTitle>

			{/* 根本的に外部APIの使い方がわかっていない 
			外部APIの使い方がわからないから打開案として
			一覧ページで取得したデータそのまま連携したらとれるのではないかと
			思い下記実装してみたけどできなかった */}

			{/* mapで展開しようとして無理だった */}
			{/* {tableData.map((key) =>
				key.id === id ? (
					<DialogContent> */}
			{/* TODO: ユーザー情報をテーブル形式で表示する */}
			{/* <tr>
							<td>id:</td>
							<td>{key.id}</td>
						</tr>
						<tr>
							<td>addres:</td>
							<td>{key.address.city}</td>
						</tr>
					</DialogContent>
				) : (
					''
				)
			)} */}

			{/* formatValueの使い方わからないけどとりあえず使ってみた */}
			<DialogContent>
				{tableData ? (
					<ul>
						{Object.entries(tableData).map(([key, value]) =>
							value.id === id ? (
								<li key={key} style={{ listStyle: 'none' }}>
									<div
										style={{
											display: 'grid',
											gridTemplateColumns: '1.25fr 0.25fr 6fr'
										}}
									>
										<DialogContentText sx={{ fontWeight: 'bold', textAlign: 'right' }}>
											{key}
										</DialogContentText>
										<DialogContentText sx={{ textAlign: 'center' }}>:</DialogContentText>
										<DialogContentText sx={{ wordBreak: 'break-all' }}>
											{formatValue(value)}
										</DialogContentText>
									</div>
								</li>
							) : (
								''
							)
						)}
					</ul>
				) : (
					<p>Loading...</p>
				)}
			</DialogContent>

			<DialogActions>
				{/* TODO: ダイアログを閉じるイベントを設定 */}
				<Button onClick={onClose}>閉じる</Button>
			</DialogActions>
		</Dialog>
	)
}

export default UserDetailDialog
