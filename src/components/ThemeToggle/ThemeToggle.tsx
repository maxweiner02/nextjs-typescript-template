/**
 * Theme Toggle Component
 * Provides accessible theme switching functionality
 * Follows SRP by handling only theme toggle UI and logic
 */

'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.skeleton} aria-hidden='true'>
        <div className={styles.button}></div>
      </div>
    );
  }

  const handleThemeChange = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      default:
        setTheme('light');
        break;
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      default:
        return '💻';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      default:
        return 'Switch to light mode';
    }
  };

  return (
    <div className={styles.themeToggle}>
      <button
        className={styles.button}
        onClick={handleThemeChange}
        aria-label={getThemeLabel()}
        title={getThemeLabel()}
        type='button'
      >
        <span className={styles.icon} role='img' aria-hidden='true'>
          {getThemeIcon()}
        </span>
        <span className={styles.label}>
          {theme === 'system'
            ? 'System'
            : theme
            ? theme.charAt(0).toUpperCase() + theme.slice(1)
            : 'Theme'}
        </span>
      </button>
    </div>
  );
}
