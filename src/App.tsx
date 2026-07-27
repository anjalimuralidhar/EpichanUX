import { useState } from 'react';
import styles from './App.module.css';
import Sidebar, { type View } from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';

export default function App() {
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className={styles.app}>
      <Sidebar current={view} onNavigate={setView} />
      <div className={styles.main}>
        <TopBar />
        <main className={styles.content}>
          {view === 'dashboard' && <Dashboard />}
          {view === 'projects' && <Projects />}
          {view === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}
