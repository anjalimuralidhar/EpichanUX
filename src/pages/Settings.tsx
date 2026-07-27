import { useState } from 'react';
import styles from './Settings.module.css';
import SettingsRow from '../components/SettingsRow';
import Toggle from '../components/Toggle';

export default function Settings() {
  const [prefs, setPrefs] = useState({
    projectUpdates: true,
    mentions: true,
    taskAssigned: false,
    weeklyDigest: true,
    productNews: false,
  });

  const set = (key: keyof typeof prefs) => (next: boolean) =>
    setPrefs((p) => ({ ...p, [key]: next }));

  return (
    <div>
      <h1 className={styles.heading}>Settings</h1>
      <p className={styles.subhead}>Manage your account and notification preferences.</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Notifications</h2>
        <div className={styles.panel}>
          <SettingsRow
            title="Project updates"
            description="Get notified when a project you follow changes status or hits a milestone."
            control={
              <Toggle
                label="Project updates"
                checked={prefs.projectUpdates}
                onChange={set('projectUpdates')}
              />
            }
          />
          <SettingsRow
            title="Mentions"
            description="Receive a notification whenever a teammate @mentions you in a comment."
            control={
              <Toggle label="Mentions" checked={prefs.mentions} onChange={set('mentions')} />
            }
          />
          <SettingsRow
            title="Task assignments"
            description="Be alerted the moment a task is assigned to you by a project owner."
            control={
              <Toggle
                label="Task assignments"
                checked={prefs.taskAssigned}
                onChange={set('taskAssigned')}
              />
            }
          />
          <SettingsRow
            title="Weekly digest"
            description="A summary of everything that happened across your projects, every Monday."
            control={
              <Toggle
                label="Weekly digest"
                checked={prefs.weeklyDigest}
                onChange={set('weeklyDigest')}
              />
            }
          />
          <SettingsRow
            title="Product news"
            description="Occasional updates about new EpichanUX features and improvements."
            control={
              <Toggle
                label="Product news"
                checked={prefs.productNews}
                onChange={set('productNews')}
              />
            }
          />
        </div>
      </section>
    </div>
  );
}
