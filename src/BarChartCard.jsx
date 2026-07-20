import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { UNIVERSITIES, UNIV_NAMES, LEVELS_DATA, YEARS, BAR_Y_MAX, T } from './data';

export default function BarChartCard({ lang }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [year, setYear] = useState(2023);
  const t = T[lang];

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    const labels = UNIVERSITIES.map((u) => UNIV_NAMES[u][lang]);

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: t.levelBachelor,
            data: UNIVERSITIES.map((u) => LEVELS_DATA.bachelor[u][year]),
            backgroundColor: '#3E5C76',
          },
          {
            label: t.levelMaster,
            data: UNIVERSITIES.map((u) => LEVELS_DATA.master[u][year]),
            backgroundColor: '#D4A017',
          },
          {
            label: t.levelDoctoral,
            data: UNIVERSITIES.map((u) => LEVELS_DATA.doctoral[u][year]),
            backgroundColor: '#B5654F',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { boxWidth: 12, font: { size: 10 }, padding: 10 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString(t.numberLocale)}`,
            },
          },
        },
        scales: {
          y: {
            min: 0,
            max: BAR_Y_MAX,
            title: { display: true, text: t.yAxisLabel, font: { size: 11 } },
            ticks: {
              callback: (v) => v.toLocaleString(t.numberLocale),
              font: { size: 10 },
            },
            grid: { color: '#eef0f2' },
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 9.5 } },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [lang, year]);

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h2>{t.barCardTitle}</h2>
          <p className="card-desc">{t.barCardDesc}</p>
        </div>
        <div className="control">
          <label htmlFor="year-select">{t.barSelectLabel}</label>
          <select
            id="year-select"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
