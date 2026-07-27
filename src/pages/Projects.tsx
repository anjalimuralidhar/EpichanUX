import styles from './Projects.module.css';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div>
      <h1 className={styles.heading}>Projects</h1>
      <p className={styles.subhead}>All active workstreams across the team.</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td className={styles.name}>{p.name}</td>
              <td>{p.owner}</td>
              <td>
                <span className={`${styles.badge} ${styles[p.status.replace(/\s/g, '')]}`}>
                  {p.status}
                </span>
              </td>
              <td>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: `${p.progress}%` }} />
                </div>
              </td>
              <td>{p.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
