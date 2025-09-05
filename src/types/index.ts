/**
 * Common TypeScript types for Max's Next.js Template
 * Following SOLID principles with focused, single-responsibility interfaces
 */

// Component Props Types
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

// Layout Types
export interface LayoutProps extends BaseComponentProps {
  /** Page title for SEO */
  title?: string;
  /** Page description for SEO */
  description?: string;
}

// Navigation Types
export interface NavigationItem {
  /** Display text */
  label: string;
  /** URL or route */
  href: string;
  /** Whether link opens in new tab */
  external?: boolean;
  /** Icon component or string */
  icon?: React.ReactNode | string;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  /** Response data */
  data: T;
  /** Success status */
  success: boolean;
  /** Error message if any */
  message?: string;
}

export interface ApiError {
  /** Error message */
  message: string;
  /** HTTP status code */
  status: number;
  /** Error code for handling */
  code?: string;
}

// Form Types
export interface FormFieldProps {
  /** Field name */
  name: string;
  /** Field label */
  label: string;
  /** Whether field is required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Help text */
  helpText?: string;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorScheme = 'blue' | 'green' | 'purple' | 'orange';

// Utility Types
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event Handler Types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
