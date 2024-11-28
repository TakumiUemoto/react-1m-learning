/**
 * ラジオボタンのコンポーネント
 */

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string
}

const RadioButtonSample: React.FC<Props> = ({ label, value, ...rest }) => {
	const id = `radio-${value}`

	return (
		<label
			htmlFor={id}
			className="radio-button"
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '0.25rem'
			}}
		>
			<input id={id} type="radio" className="radio-button__input" {...rest} />
			<span className="radio-button__label">{label}</span>
		</label>
	)
}

export default RadioButtonSample
