import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <>
    <input type="text" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}  placeholder={label} className="input input-bordered w-full max-w-xs m-5"/><br />
  </>
);

export default Input;
