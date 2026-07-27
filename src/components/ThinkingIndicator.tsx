import styles from './ThinkingIndicator.module.css';

export default function ThinkingIndicator() {
  return (
    <div className={styles.thinking} role="status" aria-live="polite">
      <div className={styles.bars}>
        <div className={styles.bar} />
        <div className={`${styles.bar} ${styles.short}`} />
      </div>
      <span className={styles.caption}>Thinking…</span>
    </div>
  );
}
