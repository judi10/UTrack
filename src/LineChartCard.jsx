import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { UNIVERSITIES, UNIV_NAMES, UNIV_COLORS, YEARS, getTotalByYear, LINE_Y_MAX, T } from './data';

export default function LineChartCard({ lang }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [univ, setUniv] = useState('ottawa');
  const t = T[lang];

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    const data = getTotalByYear(univ);
    const color = UNIV_COLORS[univ];

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: YEARS.map((y) => `${y}`),
        datasets: [
          {
            label: UNIV_NAMES[univ][lang],
            data,
            borderColor: color,
            backgroundColor: color + '33',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: color,
            borderWidth: 2.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                ` ${ctx.parsed.y.toLocaleString(t.numberLocale)}`,
            },
          },
        },
        scales: {
          y: {
            min: 0,
            max: LINE_Y_MAX,
            title: { display: true, text: t.yAxisLabel, font: { size: 11 } },
            ticks: {
              callback: (v) => v.toLocaleString(t.numberLocale),
              font: { size: 10 },
            },
            grid: { color: '#eef0f2' },
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 } },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [lang, univ]);

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h2>{t.lineCardTitle}</h2>
          <p className="card-desc">{t.lineCardDesc}</p>
        </div>
        <div className="control">
          <label htmlFor="univ-select">{t.lineSelectLabel}</label>
          <select
            id="univ-select"
            value={univ}
            onChange={(e) => setUniv(e.target.value)}
          >
            {UNIVERSITIES.map((u) => (
              <option key={u} value={u}>
                {UNIV_NAMES[u][lang]}
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
