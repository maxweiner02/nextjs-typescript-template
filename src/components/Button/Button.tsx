/**
 * Versatile Button/Link Component
 * Renders as <a> when href is provided, <button> otherwise
 * Maintains server-side rendering compatibility
 */

import styles from './Button.module.scss';

// Base props shared by both button and link variants
interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

// Button-specific props (when href is not provided)
interface ButtonElementProps extends BaseButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
  target?: never;
  rel?: never;
}

// Link-specific props (when href is provided)
interface LinkElementProps extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

// Union type for the component props
type ButtonProps = ButtonElementProps | LinkElementProps;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  const componentClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render as link when href is provided
  if ('href' in props && props.href) {
    return (
      <a
        className={componentClasses}
        href={disabled ? undefined : props.href}
        target={props.target}
        rel={props.rel}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  // Render as button when href is not provided
  return (
    <button
      className={componentClasses}
      disabled={disabled}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {children}
    </button>
  );
}
