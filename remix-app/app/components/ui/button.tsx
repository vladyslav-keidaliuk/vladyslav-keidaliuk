import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary', 
  outline: 'btn-outline',
  ghost: 'btn-ghost'
};

const sizeClasses = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg'
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel
}: ButtonProps) => {
  const baseClasses = `btn ${variantClasses[variant]} ${sizeClasses[size]} shadow-lg hover:shadow-xl transition-all ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
