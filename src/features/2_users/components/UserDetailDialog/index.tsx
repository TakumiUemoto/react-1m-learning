import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'

type Props = {
	// TODO: ユーザー情報を取得するための引数を定義
	open: boolean
	onClose: () => void
}

/**
 * ユーザー詳細ダイアログ
 * @param open - ダイアログの開閉状態
 * @param onClose - ダイアログを閉じる関数
 * @returns ユーザー詳細ダイアログ
 */
function UserDetailDialog({ open, onClose }: Props): JSX.Element {
	// TODO: propsで渡されたIDを元に単一のユーザー情報を取得する
	// path: ${import.meta.env.VITE_API_URL_USERS_GET}/${id}

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>ユーザー詳細</DialogTitle>

			<DialogContent>{/* TODO: ユーザー情報をテーブル形式で表示する */}</DialogContent>

			<DialogActions>
				{/* TODO: ダイアログを閉じるイベントを設定 */}
				<Button>閉じる</Button>
			</DialogActions>
		</Dialog>
	)
}

export default UserDetailDialog
