// src/RadioButton.tsx
import React from 'react';

type RadioButtonProps = {
  label: string;
  value: number;
  checked: boolean;
  onChange: (value: number) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
  return (
    <label className="radio-button">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="radio-button__input"
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

export default RadioButton;