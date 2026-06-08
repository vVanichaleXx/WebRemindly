import { forwardRef } from 'react';

const beforeI = ['R', 'e', 'm'];
const afterI = ['n', 'd', 'l', 'y'];

function ReminderWordmark({ iRef }, ref) {
  return (
    <h1 ref={ref} className="reminder-wordmark" aria-label="Remindly">
      {beforeI.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="wordmark-letter"
          style={{ '--letter-index': index }}
        >
          {letter}
        </span>
      ))}
      <span ref={iRef} className="wordmark-letter wordmark-i" aria-hidden="true">
        <span className="wordmark-i-stem" style={{ '--letter-index': beforeI.length }} />
      </span>
      {afterI.map((letter, index) => (
        <span
          key={`${letter}-${index + beforeI.length + 1}`}
          className="wordmark-letter"
          style={{ '--letter-index': index + beforeI.length + 1 }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}

export default forwardRef(ReminderWordmark);
