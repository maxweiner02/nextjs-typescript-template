/**
 * Versatile Button/Link Component
 * Renders as <a> when href is provided, <button> otherwise
 * Maintains server-side rendering compatibility
 */

import styles from './Button.module.scss';

// Base props shared by both button and link variants
interface BaseButtonProps {
  /** The button/link text content */
  children: React.ReactNode;
  /** The button variant style */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** The button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button/link is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Button-specific props (when href is not provided)
interface ButtonElementProps extends BaseButtonProps {
  /** Click handler function */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** No href for button mode */
  href?: never;
  /** No target for button mode */
  target?: never;
  /** No rel for button mode */
  rel?: never;
}

// Link-specific props (when href is provided)
interface LinkElementProps extends BaseButtonProps {
  /** URL for link mode - when provided, renders as <a> tag */
  href: string;
  /** Target for link (e.g., '_blank') */
  target?: string;
  /** Rel attribute for link (e.g., 'noopener noreferrer') */
  rel?: string;
  /** No onClick for link mode (use href instead) */
  onClick?: never;
  /** No type for link mode */
  type?: never;
}

// Union type for the component props
type ButtonProps = ButtonElementProps | LinkElementProps;

/**
 * A versatile button/link component following SOLID principles
 * - Single Responsibility: Handles both button and link rendering
 * - Open/Closed: Extensible via props without modification
 * - Liskov Substitution: Can replace native buttons/links
 * - Interface Segregation: Separate interfaces for button vs link concerns
 * - Dependency Inversion: Depends on props abstraction, not concrete implementations
 *
 * @example
 * // As a button (client-side interaction)
 * <Button onClick={() => handleSubmit()}>Submit</Button>
 *
 * @example
 * // As a link (server-side rendering friendly)
 * <Button href="/about" variant="secondary">Learn More</Button>
 *
 * @example
 * // External link
 * <Button
 *   href="https://example.com"
 *   target="_blank"
 *   rel="noopener noreferrer"
 * >
 *   Visit Site
 * </Button>
 */
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
