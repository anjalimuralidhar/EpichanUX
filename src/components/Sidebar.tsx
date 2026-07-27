import styles from './Sidebar.module.css';

export type View = 'dashboard' | 'projects' | 'settings';

const items: { id: View; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '▚' },
  { id: 'projects', label: 'Projects', icon: '▤' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
];

export default function Sidebar({
  current,
  onNavigate,
}: {
  current: View;
  onNavigate: (view: View) => void;
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.logo}>E</span>
        <span className={styles.name}>EpichanUX</span>
      </div>
      <nav className={styles.nav}>
        {items.map((item) => (
          <button
            key={item.id}
            className={
              current === item.id ? `${styles.item} ${styles.active}` : styles.item
            }
            onClick={() => onNavigate(item.id)}
          >
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
