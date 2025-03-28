'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AnimatedInputProps {
  label: string;
  name?: string;
  value: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  type?: 'text' | 'number' | 'password' | 'date' | 'email';
  error?: boolean;
  maxDate?: string;
  autoComplete?: 'on' | 'off' | 'new-password' | 'username' | 'email';
  required?: boolean;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  name,
  id,
  value,
  onChange,
  readOnly = false,
  type = 'text',
  error,
  maxDate,
  autoComplete = 'on',
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isEmail = type === 'email';

  return (
    <div className="relative w-full">

      <label
        className={`
          absolute left-3 px-1 transition-all pointer-events-none bg-white
          ${isFocused || value ? 'top-[-10px] text-xs' : 'top-3 text-md'}
          ${error
            ? 'text-red-900 bg-red-50'
            : isFocused || value
              ? 'text-[rgba(var(--dark-latte))]'
              : 'text-gray-500'
          }
        `}
      >
        {label}
      </label>

      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        readOnly={readOnly}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!value)}
        autoComplete={autoComplete}
        spellCheck={type === 'password' ? 'false' : 'true'}
        inputMode={isEmail ? 'email' : undefined}
        pattern={isEmail ? '[^@\\s]+@[^@\\s]+\\.[^@\\s]+' : undefined}
        required={required}
        {...(type === 'date' && { max: maxDate })}
        className={`
          w-full p-3 rounded-xl appearance-none placeholder-transparent transition-all cursor-pointer outline-none text-gray-500
          ${error
            ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
            : 'bg-transparent border border-[rgba(var(--dark-latte))] focus:border-[rgba(var(--dark-latte))] focus:ring-1 focus:ring-[rgba(var(--dark-latte))]'}
          ${isFocused || value ? 'border-1' : 'top-3 text-md'}
        `}
      />

      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
};

export default AnimatedInput;
