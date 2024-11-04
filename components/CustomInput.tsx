import React, { useState } from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility state
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col relative">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={showPassword ? 'text' : (name === 'password' ? 'password' : 'text')}
                value={field.value || ''} // Ensure value is always defined
                onChange={field.onChange} // Handle input change
              />
            </FormControl>
            {/* Show/Hide Password Button */}
            {(name === 'password') && (
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            )}
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
}

export default CustomInput;
