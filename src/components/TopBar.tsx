import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.search}>
        <input placeholder="Search projects, tasks…" aria-label="Search" />
      </div>
      <div className={styles.right}>
        <button className={styles.bell} aria-label="Notifications">
          🔔
        </button>
        <div className={styles.avatar}>MC</div>
      </div>
    </header>
  );
}
