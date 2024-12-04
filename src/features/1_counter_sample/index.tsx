import { useState } from 'react'
import { Link } from 'react-router-dom'
import RadioButton from './components/RadioButton'

/**
 * カウンターアプリを表示するページ
 */

type CounterMessageType = 'even' | 'odd' | 'reset' | 'initial'
type RadioOption = {
	value: number
}

// メッセージの情報
const messageInfo: Record<CounterMessageType, string> = {
	even: '偶数です。',
	odd: '奇数です。',
	reset: 'リセットされました。',
	initial: 'ボタンを押してください。'
}
// ラジオボタンの情報
const radioInfo: RadioOption[] = [
	{
		value: 1
	},
	{
		value: 3
	},
	{
		value: 5
	}
]

function CounterSample(): JSX.Element {
	// 状態管理
	const [count, setCount] = useState<number>(0)
	const [messageKey, setMessageKey] = useState<CounterMessageType>('initial')
	const [selectedValue, setSelectedValue] = useState<number>(1)

	// カウントボタンクリック時の処理
	const incrementCounter = () => {
		const updatedCount = count + selectedValue
		setCount(updatedCount)
		setMessageKey(updatedCount % 2 === 0 ? 'even' : 'odd')
	}
	// カウンターをリセット
	const resetCounter = () => {
		setCount(0)
		setMessageKey('reset')
	}
	// ラジオボタンの選択変更時の処理
	const handleRadioValueChange = (value: number) => {
		setSelectedValue(value)
		resetCounter()
	}

	return (
		<>
			<h2>Counter</h2>

			<div>
				{/* UI */}
				<h4>ボタンを押すとカウントアップ</h4>

				<div
					className="counter-container"
					style={{
						border: '1px solid white',
						padding: '1rem'
					}}
				>
					<div
						className="radio-button-container"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							border: '1px solid white',
							padding: '1rem',
							gap: '1rem'
						}}
					>
						<p>増加量: </p>
						<div
							className="radio-button-list"
							style={{
								display: 'flex',
								gap: '1rem'
							}}
						>
							{radioInfo.map((m, i) => {
								return (
									<RadioButton
										key={`${m.value}-${i}`}
										label={`+${m.value}`}
										value={m.value}
										checked={selectedValue === m.value}
										onChange={() => handleRadioValueChange(m.value)}
									/>
								)
							})}
						</div>
					</div>

					<div
						className="counter-message-container"
						style={{
							textAlign: 'left'
						}}
					>
						<p>カウント数：{count}</p>
						<p>メッセージ：{messageInfo[messageKey]}</p>
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							gap: '0.5rem'
						}}
					>
						<button onClick={incrementCounter}>カウントアップ</button>
						<button onClick={() => resetCounter()}>リセット</button>
					</div>
				</div>
			</div>

			<div style={{ marginTop: '2rem' }}>
				<Link to="/">- Home -</Link>
			</div>
		</>
	)
}

export default CounterSample
