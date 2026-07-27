import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { projects } from '../data/projects';
import ThinkingIndicator from '../components/ThinkingIndicator';

export default function Dashboard() {
  const active = projects.length;
  const onTrack = projects.filter((p) => p.status === 'On track').length;
  const openTasks = projects.reduce((sum, p) => sum + p.tasks, 0);

  const [loading, setLoading] = useState(true);
  const [insight, setInsight] = useState('');

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      setInsight(
        'On-track projects are up this week. Search Relevance is the main risk — it is delayed with 41 open tasks.'
      );
      setLoading(false);
    }, 2500);
    return () => clearTimeout(t);
  }, [loading]);

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

      <div className={styles.insights}>
        <div className={styles.insightsHeader}>
          <span className={styles.statLabel}>AI insights</span>
          <button
            className={styles.regenerate}
            onClick={() => {
              setInsight('');
              setLoading(true);
            }}
            disabled={loading}
          >
            Regenerate
          </button>
        </div>
        {loading ? (
          <ThinkingIndicator />
        ) : (
          <p className={styles.insightText}>{insight}</p>
        )}
      </div>
    </div>
  );
}
