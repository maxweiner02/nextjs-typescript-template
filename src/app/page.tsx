import styles from './page.module.scss';
import { Button, ThemeToggle } from '@/components';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Max&apos;s Template</h1>
        <p className={styles.subtitle}>
          Next.js + TypeScript + SCSS + Radix UI
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.welcome}>
          <h2 className={styles.greeting}>
            Welcome to my personal template! 👋
          </h2>
          <p className={styles.description}>
            Carefully crafted Next.js template featuring TypeScript, SCSS, and
            Radix UI primitives
          </p>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Lightning Fast</h3>
            <p className={styles.featureDescription}>
              Built with Next.js 15 for optimal performance and developer
              experience
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎯</div>
            <h3 className={styles.featureTitle}>Type Safe</h3>
            <p className={styles.featureDescription}>
              Full TypeScript support with strict mode enabled for bulletproof
              code
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎨</div>
            <h3 className={styles.featureTitle}>Styled with SCSS</h3>
            <p className={styles.featureDescription}>
              Modern SCSS architecture with CSS custom properties and responsive
              design
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🧩</div>
            <h3 className={styles.featureTitle}>Radix UI Primitives</h3>
            <p className={styles.featureDescription}>
              Unstyled, accessible components built with Radix UI primitives for
              maximum flexibility and composability
            </p>
          </div>
        </section>

        <section className={styles.actions}>
          <Button
            variant='primary'
            size='lg'
            href='https://github.com/maxweiner02/nextjs-typescript-template'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>🚀</span>
            Start Building
          </Button>
          <Button
            variant='secondary'
            size='lg'
            href='https://nextjs.org/docs'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>📚</span>
            Read Docs
          </Button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>
            Crafted with ❤️ by <span className={styles.signature}>Max</span>
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
