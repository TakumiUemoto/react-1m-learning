import { useState } from 'react'
import { UserSample } from '../..'
import { Button } from '@mui/material'
import UserDetailDialogSample from '../UserDetailDialogSample'

type Props = {
	tableData: UserSample[]
}

const excludeKeys = ['username', 'website', 'email', 'company', 'address', 'phone']

function UserListTableSample({ tableData }: Props): JSX.Element {
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

	const filteredData = tableData.map((item) => {
		const filteredItem = { ...item }
		excludeKeys.forEach((key) => {
			delete filteredItem[key as keyof UserSample]
		})
		return filteredItem
	})

	return (
		<>
			<table
				style={{
					borderCollapse: 'collapse',
					width: '100%',
					margin: '1rem 0'
				}}
			>
				<thead>
					<tr>
						<th
							style={{
								border: '1px solid #ddd',
								padding: '8px',
								textAlign: 'left',
								color: '#333',
								backgroundColor: '#f4f4f4'
							}}
						></th>
						{filteredData.length > 0 &&
							Object.keys(filteredData[0]).map((key) => (
								<th
									key={key}
									style={{
										border: '1px solid #ddd',
										padding: '8px',
										textAlign: 'left',
										color: '#333',
										backgroundColor: '#f4f4f4'
									}}
								>
									{key}
								</th>
							))}
					</tr>
				</thead>
				<tbody>
					{filteredData.map((row) => (
						<tr key={row.id}>
							<td
								style={{
									border: '1px solid #ddd',
									padding: '8px'
								}}
							>
								<Button variant="contained" size="small" onClick={() => setSelectedUserId(row.id)}>
									詳細
								</Button>
							</td>
							{Object.values(row).map((value, j) => (
								<td
									key={j}
									style={{
										border: '1px solid #ddd',
										padding: '8px'
									}}
								>
									{typeof value === 'object' ? JSON.stringify(value) : String(value)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{selectedUserId !== undefined && selectedUserId !== null && (
				<UserDetailDialogSample
					id={selectedUserId}
					open={true}
					onClose={() => setSelectedUserId(null)}
				/>
			)}
		</>
	)
}

export default UserListTableSample