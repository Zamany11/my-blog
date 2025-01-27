// components/StatsSection.tsx
"use client"
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {/* Uptime */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center gap-1">
          {inView && <CountUp end={99.0} decimals={1} duration={2.5} />}
          <span>%</span>
        </div>
        <p className="text-gray-400 mt-2">Uptime</p>
      </div>

      {/* Countries */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center gap-1">
          {inView && <CountUp end={80} duration={2.5} />}
          <span>M+</span>
        </div>
        <p className="text-gray-400 mt-2">Paid</p>
      </div>

      {/* Processed */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center gap-1">
          <span>$</span>
          {inView && <CountUp end={2} duration={2.5} />}
          <span>B+</span>
        </div>
        <p className="text-gray-400 mt-2">Processed</p>
      </div>

      {/* Support */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center">
          {inView && <CountUp end={247} duration={2.5} />}
        </div>
        <p className="text-gray-400 mt-2">Support</p>
      </div>
    </div>
  );
}
