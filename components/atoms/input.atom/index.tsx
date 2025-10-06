import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva('global-input', {
  variants: {
    variant: {
      default: '',
      error: 'global-input-error',
      success: 'global-input-success',
    },
    size: {
      default: 'global-input-size-default',
      sm: 'global-input-size-sm',
      lg: 'global-input-size-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  labelClassName?: string;
  helperText?: string;
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelClassName,
      type = 'text',
      helperText,
      rightIcon,
      className,
      leftIcon,
      variant,
      label,
      error,
      size,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const finalVariant = hasError ? 'error' : variant;

    if (leftIcon || rightIcon) {
      return (
        <div className='relative'>
          {leftIcon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant: finalVariant, size }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
              {rightIcon}
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        {label && (
          <label
            htmlFor={label}
            className={cn('global-input-label', labelClassName)}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant: finalVariant, size, className })
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className='mt-1 text-xs text-muted-foreground'>{helperText}</p>
        )}
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
