import React from 'react';
import './Charts.css';

export interface ChartsProps {
  type?: 'bar' | 'line' | 'pie' | 'donut' | 'area' | 'bubble' | 'radar' | 'heatmap' | 'gauge';
  data?: Array<{ label: string; value: number; color?: string }>;
  className?: string;
}

export const Charts: React.FC<ChartsProps> = ({
  type = 'bar',
  data = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 80 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 90 },
  ],
  className = '',
}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`charts charts--${type} ${className}`} data-name={`Type=${type}`}>
      <div className="charts__container">
        {type === 'bar' && (
          <div className="charts__bars">
            {data.map((item, index) => (
              <div key={index} className="charts__bar-item">
                <div
                  className="charts__bar"
                  style={{
                    height: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color || `var(--color-chart-solid-${(index % 6) + 1})`,
                  }}
                />
                <span className="charts__label">{item.label}</span>
              </div>
            ))}
          </div>
        )}
        {type === 'line' && (
          <svg className="charts__line-chart" viewBox="0 0 576 272">
            <polyline
              points={data.map((item, index) => `${(index * 576) / (data.length - 1)},${272 - (item.value / maxValue) * 272}`).join(' ')}
              fill="none"
              stroke="var(--color-primary-5)"
              strokeWidth="2"
            />
          </svg>
        )}
        {type === 'pie' && (
          <div className="charts__pie">
            <svg viewBox="0 0 369 329" className="charts__pie-svg">
              {data.map((item, index, arr) => {
                const total = arr.reduce((sum, d) => sum + d.value, 0);
                const startAngle = arr.slice(0, index).reduce((sum, d) => sum + (d.value / total) * 360, 0);
                const angle = (item.value / total) * 360;
                const largeArcFlag = angle > 180 ? 1 : 0;
                const x1 = 184.5 + 184.5 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 164.5 + 164.5 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 184.5 + 184.5 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                const y2 = 164.5 + 164.5 * Math.sin(((startAngle + angle) * Math.PI) / 180);
                return (
                  <path
                    key={index}
                    d={`M 184.5 164.5 L ${x1} ${y1} A 184.5 184.5 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    fill={item.color || `var(--color-chart-solid-${(index % 6) + 1})`}
                  />
                );
              })}
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Charts;

