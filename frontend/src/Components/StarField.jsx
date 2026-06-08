import { useEffect, useRef } from 'react';

const STAR_LAYERS = [
  { count: 62, speed: 0.012, size: [0.45, 1.1], opacity: [0.22, 0.62], blur: 0 },
  { count: 48, speed: 0.024, size: [0.8, 1.7], opacity: [0.3, 0.82], blur: 0.1 },
  { count: 26, speed: 0.044, size: [1.2, 2.4], opacity: [0.42, 0.95], blur: 0.35 },
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function makeStar(layer, width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: randomBetween(layer.size[0], layer.size[1]),
    opacity: randomBetween(layer.opacity[0], layer.opacity[1]),
    phase: Math.random() * Math.PI * 2,
    twinkle: randomBetween(0.45, 1.35),
    speed: layer.speed * randomBetween(0.72, 1.35),
    drift: randomBetween(-0.012, 0.018),
    blur: layer.blur,
  };
}

function makeMeteor(width, height) {
  return {
    active: false,
    delay: randomBetween(2600, 6200),
    elapsed: 0,
    duration: randomBetween(900, 1500),
    x: randomBetween(width * 0.45, width * 1.08),
    y: randomBetween(height * 0.05, height * 0.48),
    length: randomBetween(74, 150),
    speed: randomBetween(0.55, 0.9),
  };
}

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let lastTime = performance.now();
    let width = 0;
    let height = 0;
    let stars = [];
    let meteors = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      stars = STAR_LAYERS.flatMap((layer) =>
        Array.from({ length: layer.count }, () => makeStar(layer, width, height))
      );
      meteors = Array.from({ length: 2 }, () => makeMeteor(width, height));
    };

    const drawStar = (star, time) => {
      const pulse = 0.7 + Math.sin(time * 0.001 * star.twinkle + star.phase) * 0.3;
      const alpha = star.opacity * pulse;
      const glow = star.radius * 5;

      context.save();
      context.globalAlpha = alpha;
      context.shadowColor = 'rgba(127, 176, 255, 0.72)';
      context.shadowBlur = glow + star.blur * 12;
      context.fillStyle = 'rgba(248, 251, 255, 0.96)';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const drawMeteor = (meteor, delta) => {
      meteor.elapsed += delta;

      if (!meteor.active && meteor.elapsed > meteor.delay) {
        meteor.active = true;
        meteor.elapsed = 0;
        meteor.duration = randomBetween(900, 1500);
        meteor.x = randomBetween(width * 0.55, width * 1.08);
        meteor.y = randomBetween(height * 0.05, height * 0.42);
        meteor.length = randomBetween(74, 150);
        meteor.speed = randomBetween(0.55, 0.9);
      }

      if (!meteor.active) {
        return;
      }

      const progress = meteor.elapsed / meteor.duration;

      if (progress >= 1) {
        Object.assign(meteor, makeMeteor(width, height));
        return;
      }

      const eased = 1 - Math.pow(1 - progress, 3);
      const x = meteor.x - eased * width * 0.42 * meteor.speed;
      const y = meteor.y + eased * height * 0.24 * meteor.speed;
      const alpha = Math.sin(progress * Math.PI) * 0.55;
      const gradient = context.createLinearGradient(
        x,
        y,
        x + meteor.length,
        y - meteor.length * 0.48
      );

      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.38, `rgba(127, 176, 255, ${alpha * 0.65})`);
      gradient.addColorStop(1, 'rgba(127, 176, 255, 0)');

      context.save();
      context.lineWidth = 1.35;
      context.lineCap = 'round';
      context.strokeStyle = gradient;
      context.shadowColor = 'rgba(127, 176, 255, 0.45)';
      context.shadowBlur = 14;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + meteor.length, y - meteor.length * 0.48);
      context.stroke();
      context.restore();
    };

    const render = (time) => {
      const delta = Math.min(time - lastTime, 32);
      lastTime = time;
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.x += star.drift * delta;
        star.y += star.speed * delta;

        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        if (star.x < -10) {
          star.x = width + 10;
        } else if (star.x > width + 10) {
          star.x = -10;
        }

        drawStar(star, time);
      }

      for (const meteor of meteors) {
        drawMeteor(meteor, delta);
      }

      if (!reducedMotion.matches) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    resize();

    if (reducedMotion.matches) {
      render(lastTime);
    } else {
      animationFrame = requestAnimationFrame(render);
    }

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="star-field" aria-hidden="true">
      <canvas ref={canvasRef} className="star-canvas" />
      <div className="star-depth star-depth-near" />
      <div className="star-depth star-depth-far" />
      <div className="star-haze star-haze-blue" />
      <div className="star-haze star-haze-amber" />
      <div className="star-grain" />
    </div>
  );
}
