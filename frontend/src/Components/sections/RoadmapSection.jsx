import { useEffect, useMemo, useRef, useState } from 'react';
import { roadmapItems } from '../../config/homeContent.js';

const cardDots = Array.from({ length: 3 }, (_, index) => index);
const mobileRouteDots = Array.from({ length: 20 }, (_, index) => index);
const routeSegments = [
  { id: '01-right', className: 'horizontal left-to-right route-01-right', dots: 7 },
  { id: '01-down-right', className: 'vertical top-to-bottom route-01-down-right', dots: 5 },
  { id: '01-left', className: 'horizontal right-to-left route-01-left', dots: 7 },
  { id: '01-down-center', className: 'vertical top-to-bottom route-01-down-center', dots: 5 },
  { id: '01-into-02', className: 'horizontal left-to-right route-01-into-02', dots: 5 },
  { id: '02-left', className: 'horizontal right-to-left route-02-left', dots: 8 },
  { id: '02-down-left', className: 'vertical top-to-bottom route-02-down-left', dots: 5 },
  { id: '02-right', className: 'horizontal left-to-right route-02-right', dots: 7 },
  { id: '02-down-center', className: 'vertical top-to-bottom route-02-down-center', dots: 5 },
  { id: '02-into-03', className: 'horizontal right-to-left route-02-into-03', dots: 5 },
  { id: '03-right', className: 'horizontal left-to-right route-03-right', dots: 8 },
  { id: '03-down-right', className: 'vertical top-to-bottom route-03-down-right', dots: 5 },
  { id: '03-left', className: 'horizontal right-to-left route-03-left', dots: 7 },
  { id: '03-down-center', className: 'vertical top-to-bottom route-03-down-center', dots: 5 },
  { id: '03-into-04', className: 'horizontal left-to-right route-03-into-04', dots: 5 },
];
const cardMotion = [
  { fromX: -96, overshootX: 6 },
  { fromX: 132, overshootX: -8 },
  { fromX: -124, overshootX: 7 },
  { fromX: 118, overshootX: -7 },
];
const cardRevealRanges = [
  [0, 0.12],
  [0.36, 0.48],
  [0.65, 0.77],
  [0.88, 1],
];

function getRevealValue(progress, start, end) {
  if (progress <= start) {
    return 0;
  }

  if (progress >= end) {
    return 1;
  }

  return (progress - start) / (end - start);
}

function useRoadmapProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = targetRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!element || reducedMotion) {
      setProgress(1);
      return undefined;
    }

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.55;
      const total = rect.height + start - end;
      const nextProgress = Math.min(1, Math.max(0, (start - rect.top) / total));

      setProgress((current) => {
        const lockedProgress = Math.max(current, nextProgress);

        return Math.abs(current - lockedProgress) > 0.004 ? lockedProgress : current;
      });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [targetRef]);

  return progress;
}

function getLayoutCenter(element, ancestor) {
  let left = element.offsetWidth / 2;
  let top = element.offsetHeight / 2;
  let current = element;

  while (current && current !== ancestor) {
    left += current.offsetLeft || 0;
    top += current.offsetTop || 0;
    current = current.offsetParent;
  }

  return { left, top };
}

function routeDots(count, start, span, revealProgress, reverse = false) {
  return Array.from({ length: count }, (_, index) => {
    const progress = count > 1 ? (index / (count - 1)) * 100 : 0;
    const position = reverse ? 100 - progress : progress;
    const dotStart = start + index * span;
    const dotReveal = getRevealValue(revealProgress, dotStart, Math.min(dotStart + span * 1.8, 0.98));

    return (
      <i
        key={index}
        style={{
          '--dot-pos': `${position}%`,
          '--dot-reveal': dotReveal.toFixed(3),
          '--dot-scale': (0.62 + dotReveal * 0.38).toFixed(3),
        }}
      />
    );
  });
}

export default function RoadmapSection() {
  const roadmapRef = useRef(null);
  const routeLayerRef = useRef(null);
  const progress = useRoadmapProgress(roadmapRef);
  const [nodeVars, setNodeVars] = useState({});
  const totalDots = routeSegments.reduce((sum, segment) => sum + segment.dots, 0);
  let dotCursor = 0;

  const cardProgress = useMemo(
    () =>
      roadmapItems.map((_, index) => {
        const fallbackStart = Math.min(index * 0.22, 0.86);
        const range = cardRevealRanges[index] ?? [fallbackStart, Math.min(fallbackStart + 0.12, 1)];

        return getRevealValue(progress, ...range);
      }),
    [progress]
  );

  useEffect(() => {
    const track = roadmapRef.current;
    const routeLayer = routeLayerRef.current;

    if (!track || !routeLayer) {
      return undefined;
    }

    let frame = 0;

    const measureNodes = () => {
      frame = 0;
      const markers = [...track.querySelectorAll('.roadmap-card-marker span')];
      const nextVars = {};

      markers.forEach((marker, index) => {
        const key = String(index + 1).padStart(2, '0');
        const center = getLayoutCenter(marker, track);
        nextVars[`--node-${key}-x`] = `${center.left - routeLayer.offsetLeft}px`;
        nextVars[`--node-${key}-y`] = `${center.top - routeLayer.offsetTop}px`;
      });

      setNodeVars(nextVars);
    };

    const requestMeasure = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(measureNodes);
    };

    measureNodes();
    window.addEventListener('resize', requestMeasure);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('resize', requestMeasure);
    };
  }, []);

  return (
    <section id="roadmap" className="site-section roadmap-section" aria-labelledby="roadmap-title">
      <div className="section-kicker">Roadmap</div>
      <div className="section-heading-row">
        <h3 id="roadmap-title">Future pieces, connected by one calm path.</h3>
        <p>
          Each step expands what Remindly can understand while protecting the quiet first glance
          that makes the app useful.
        </p>
      </div>

      <div
        ref={roadmapRef}
        className="roadmap-track"
        style={{ '--roadmap-progress': progress.toFixed(3), ...nodeVars }}
        aria-label="Remindly product roadmap"
      >
        <div ref={routeLayerRef} className="roadmap-route-layer is-scroll-driven" aria-hidden="true">
          {routeSegments.map((segment) => {
            const segmentStart = 0.1 + (dotCursor / totalDots) * 0.78;
            const dotSpan = 0.78 / totalDots;
            dotCursor += segment.dots;

            return (
              <span key={segment.id} className={`route-segment ${segment.className}`}>
                {routeDots(
                  segment.dots,
                  segmentStart,
                  dotSpan,
                  progress,
                  segment.className.includes('right-to-left')
                )}
              </span>
            );
          })}
          <span className="route-segment vertical top-to-bottom route-mobile">
            {mobileRouteDots.map((dot) => {
              const dotStart = 0.08 + dot * 0.04;
              const dotReveal = getRevealValue(progress, dotStart, dotStart + 0.08);

              return (
                <i
                  key={dot}
                  style={{
                    '--dot-pos': `${dot * (100 / (mobileRouteDots.length - 1))}%`,
                    '--dot-reveal': dotReveal.toFixed(3),
                    '--dot-scale': (0.62 + dotReveal * 0.38).toFixed(3),
                  }}
                />
              );
            })}
          </span>
        </div>

        {roadmapItems.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const motion = cardMotion[index] ?? cardMotion[cardMotion.length - 1];
          const itemProgress = cardProgress[index];
          const settle = itemProgress < 0.76 ? itemProgress / 0.76 : 1;
          const rebound = itemProgress > 0.76 ? (itemProgress - 0.76) / 0.24 : 0;
          const translateX = motion.fromX * (1 - settle) + motion.overshootX * (1 - rebound) * settle;
          const translateY = 24 * (1 - settle) - 7 * (1 - rebound) * settle;
          const scale = 0.96 + itemProgress * 0.04 + (1 - rebound) * settle * 0.012;
          const nodeScale = 0.68 + itemProgress * 0.32 + Math.max(0, 1 - rebound) * settle * 0.12;
          const saturation = 0.9 + itemProgress * 0.1;

          return (
            <div key={item.title} className="roadmap-path-step">
              <article
                className={`roadmap-card roadmap-card-${side} roadmap-card-${index + 1}`}
                style={{
                  '--roadmap-index': index,
                  '--card-progress': cardProgress[index].toFixed(3),
                  '--card-translate-x': `${translateX.toFixed(2)}px`,
                  '--card-translate-y': `${translateY.toFixed(2)}px`,
                  '--card-scale': scale.toFixed(3),
                  '--node-scale': nodeScale.toFixed(3),
                  '--card-saturation': saturation.toFixed(3),
                }}
              >
                <span className="roadmap-card-route-mask" aria-hidden="true" />
                <div className="roadmap-card-marker">
                  <span>{item.phase}</span>
                </div>
                <div className="roadmap-card-content">
                  <div className="roadmap-card-top">
                    <strong>{item.meta}</strong>
                    <span className="roadmap-card-dots" aria-hidden="true">
                      {cardDots.map((dot) => (
                        <i key={dot} />
                      ))}
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <p className="roadmap-closing">
        The roadmap stays focused on one idea: Remindly should make the next step clearer, not
        louder.
      </p>
    </section>
  );
}
