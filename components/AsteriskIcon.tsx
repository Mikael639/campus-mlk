export default function AsteriskIcon({ size = 9 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <g stroke="#ffffff" strokeWidth="17" strokeLinecap="round">
        <line x1="50" y1="30" x2="50" y2="6" />
        <line x1="64.1" y1="35.9" x2="81" y2="19" />
        <line x1="70" y1="50" x2="94" y2="50" />
        <line x1="64.1" y1="64.1" x2="81" y2="81" />
        <line x1="50" y1="70" x2="50" y2="94" />
        <line x1="35.9" y1="64.1" x2="19" y2="81" />
        <line x1="30" y1="50" x2="6" y2="50" />
        <line x1="35.9" y1="35.9" x2="19" y2="19" />
      </g>
    </svg>
  );
}
