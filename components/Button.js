import React from 'react';
import classNames from 'classnames';

const VARIANTS = {
  primary: 'bg-ch-blue hover:bg-dark-gray text-white shadow-lg',
  secondary: 'bg-ch-green hover:bg-dark-gray text-white shadow-lg',
  text: 'text-ch-blue hover:text-dark-gray border-b-2 border-dotted border-inherit',
};

const SIZES = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-lg',
  lg: 'py-4 px-8 text-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  hasIcon = false,
  ...props
}) {
  return (
	<button
	  className={classNames(
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		VARIANTS[variant],
		SIZES[size],
		hasIcon && 'group',
		className
	  )}
	  {...props}
	>
	  {children}
	</button>
  );
}
