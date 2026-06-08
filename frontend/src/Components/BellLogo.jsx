import { forwardRef } from 'react';

function BellLogo({ className = '' }, ref) {
  return (
    <div ref={ref} className={`bell-stage ${className}`.trim()} aria-hidden="true">
      <div className="bell-orbit bell-orbit-one" />
      <div className="bell-orbit bell-orbit-two" />
      <div className="bell-button">
        <svg
          className="bell-icon"
          viewBox="0 0 80 80"
          role="img"
          aria-label="Remindly notification bell"
        >
          <path
            className="bell-body"
            d="M40 13c-12.2 0-21.2 9.6-21.2 22.4v9.1c0 3.8-1.4 7.3-4 10.1l-2.3 2.4c-1.9 2-.5 5.3 2.3 5.3h50.4c2.8 0 4.2-3.3 2.3-5.3l-2.3-2.4c-2.6-2.8-4-6.3-4-10.1v-9.1C61.2 22.6 52.2 13 40 13Z"
          />
          <path
            className="bell-highlight"
            d="M29 35.2c0-7.3 4.8-12.8 11-12.8"
          />
          <path
            className="bell-clapper"
            d="M31.8 64.2c1.5 4 4.5 6.2 8.2 6.2s6.7-2.2 8.2-6.2"
          />
        </svg>
      </div>
      <span className="bell-ping bell-ping-left" />
      <span className="bell-ping bell-ping-right" />
    </div>
  );
}

export default forwardRef(BellLogo);
