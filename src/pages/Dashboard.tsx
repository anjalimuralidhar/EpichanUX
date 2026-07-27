import styles from './Dashboard.module.css';
import { projects } from '../data/projects';

export default function Dashboard() {
  const active = projects.length;
  const onTrack = projects.filter((p) => p.status === 'On track').length;
  const openTasks = projects.reduce((sum, p) => sum + p.tasks, 0);

  return (
    <div>
      <h1 className={styles.heading}>Dashboard</h1>
      <p className={styles.subhead}>Welcome back, Maria. Here's where things stand.</p>

      <div className={styles.stats}>
        <div className={styles.card}>
          <span className={styles.statLabel}>Active projects</span>
          <span className={styles.statValue}>{active}</span>
        </div>
        <div className={styles.card}>
          <span className={styles.statLabel}>On track</span>
          <span className={styles.statValue}>{onTrack}</span>
        </div>
        <div className={styles.card}>
          <span className={styles.statLabel}>Open tasks</span>
          <span className={styles.statValue}>{openTasks}</span>
        </div>
      </div>
    </div>
  );
}
