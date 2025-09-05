/**
 * Type declarations for SCSS modules
 * Allows TypeScript to recognize .module.scss imports
 */

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
