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
