import { FieldError } from 'react-hook-form';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  label?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errors, label, ...rest }, ref) => {
    const htmlFor = label?.toLowerCase().replace(' ', '');
    return (
      <div className={className && className}>
        {label && (
          <label htmlFor={htmlFor}>
            {label}
            <br />
          </label>
        )}
        <input id={`${htmlFor}`} {...rest} ref={ref} />
        {errors && <p>{errors.message}</p>}
      </div>
    );
  }
);
