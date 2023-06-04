import { FieldError } from 'react-hook-form';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, label, ...rest }, ref) => {
    const htmlFor = label?.toLowerCase().replace(' ', '');
    return (
      <div className="content-field">
        {label && (
          <label htmlFor={htmlFor}>
            {label}
            <br />
          </label>
        )}
        <input id={`${htmlFor}`} {...rest} ref={ref} />
        <div
          style={
            !errors ? { height: '0px' } : {}
          }
          className={errors ? 'content-field-error' : ''}
        >
          {errors && <p>{errors.message}</p>}
        </div>
      </div>
    );
  }
);
