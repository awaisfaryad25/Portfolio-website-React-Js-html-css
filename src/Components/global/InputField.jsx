import React from 'react';

const InputField = ({ label, name, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm text-white font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#2c2c2e] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
      />
    </div>
  );
};

export default InputField;
