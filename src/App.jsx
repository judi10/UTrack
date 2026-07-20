import { useState, useEffect } from 'react';
import LineChartCard from './LineChartCard';
import BarChartCard from './BarChartCard';
import { T } from './data';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('fr');
  const t = T[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [lang]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-text" key={lang}>
          <h1>{t.brand}</h1>
          <p className="tagline">{t.tagline}</p>
          <p className="description">{t.description}</p>
          <p className="source">{t.source}</p>
        </div>
        <button className="lang-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
          {t.langLabel}
        </button>
      </header>

      <main className="dashboard-grid" key={lang}>
        <LineChartCard lang={lang} />
        <BarChartCard lang={lang} />
      </main>

      <footer className="dashboard-footer">{t.footer}</footer>
    </div>
  );
}
