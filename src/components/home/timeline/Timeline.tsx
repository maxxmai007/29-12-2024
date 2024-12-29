import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { timelineEvents } from './TimelineData';
import { TimelinePoint } from './TimelinePoint';

export function Timeline() {
  return (
    <div className="relative w-full h-[200px]">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={timelineEvents}
          margin={{ top: 50, right: 30, left: 30, bottom: 20 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#timelineGradient)"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={true}
            animationDuration={2000}
          />
          
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={({ x, y, payload }) => (
              <g transform={`translate(${x},${y})`}>
                <text
                  x={0}
                  y={25}
                  textAnchor="middle"
                  fill="#D4B788"
                  className="text-sm font-medium font-montserrat"
                  opacity={0.8}
                >
                  {payload.value}
                </text>
              </g>
            )}
          />
          
          <YAxis hide={true} domain={[0, 100]} />
          
          <defs>
            <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D4B788" stopOpacity={0.6} />
              <stop offset="50%" stopColor="#D4B788" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#D4B788" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          
          {/* Birthday Trip Marker */}
          <g transform={`translate(${30}, ${140})`}>
            <circle
              r="4"
              fill="#D4B788"
              className="animate-pulse"
            />
            <text
              x="10"
              y="15"
              className="text-sm font-montserrat"
              fill="#FFFFFF"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
              Birthday Trip
            </text>
          </g>

          {/* Honeymoon Trip Marker */}
          <g transform={`translate(${200}, ${90})`}>
            <circle
              r="4"
              fill="#D4B788"
              className="animate-pulse"
            />
            <text
              x="-60"
              y="-10"
              className="text-sm font-montserrat"
              fill="#FFFFFF"
              textAnchor="middle"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
              Honeymoon Trip
            </text>
          </g>

          {timelineEvents.map((event, index) => (
            <TimelinePoint
              key={event.date}
              event={event}
              cx={`${index * (100 / (timelineEvents.length - 1))}%`}
              cy={`${100 - event.value}%`}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}