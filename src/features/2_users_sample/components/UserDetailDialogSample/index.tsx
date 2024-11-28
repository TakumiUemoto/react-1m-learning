import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@mui/material'
import { useCallback, useEffect, useState, Fragment } from 'react'
import { UserSample } from '../..'
type Props = {
	id: UserSample['id']
	open: boolean
	onClose: () => void
}

/**
 * ユーザー詳細ダイアログ
 * @param id - ユーザーID
 * @param open - ダイアログの開閉状態
 * @param onClose - ダイアログを閉じる関数
 *
 * @returns ユーザー詳細ダイアログ
 */
function UserDetailDialogSample({ id, open, onClose }: Props): JSX.Element {
	// 状態管理
	const [user, setUser] = useState<UserSample | null>(null)

	// IDに基づいたユーザー情報を取得する非同期関数
	const fetchUser = useCallback(async (id: UserSample['id']) => {
		if (id === undefined || id === null) return

		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			const data = await res.json()
			setUser(data)
		} catch (error) {
			console.error('Error fetching user:', error)
		}
	}, [])
	// 初回レンダリング時にユーザー情報を取得する
	useEffect(() => {
		fetchUser(id)
	}, [fetchUser, id])

	// 値をフォーマットする
	const formatValue = (value: UserSample[keyof UserSample]): React.ReactNode => {
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
			<DialogTitle sx={{ fontWeight: 'bold' }}>ユーザー詳細 (Sample)</DialogTitle>

			<DialogContent>
				{user ? (
					<ul>
						{Object.entries(user).map(([key, value]) => (
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
						))}
					</ul>
				) : (
					<p>Loading...</p>
				)}
			</DialogContent>

			<DialogActions sx={{ p: '1rem' }}>
				<Button variant="contained" onClick={onClose}>
					閉じる
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default UserDetailDialogSample
