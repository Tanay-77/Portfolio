

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

export default function InteractiveText({ text }: { text: string }) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <Word key={i} word={word} />
      ))}
    </>
  );
}

function Word({ word }: { word: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();

  const wordPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      wordPos.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    };

    // Initial positioning and resize listener
    updatePos();
    window.addEventListener('resize', updatePos);

    // Quick fallback in case fonts finish loading
    const timer = setTimeout(updatePos, 300);

    const handleCatMove = (e: CustomEvent) => {
      const { x: catX, y: catY, state } = e.detail;

      const wordX = wordPos.current.x;
      const wordY = wordPos.current.y;

      const dx = wordX - catX;
      const dy = wordY - catY;
      const dist = Math.hypot(dx, dy);

      const maxDist = 100; // interaction radius

      if (dist < maxDist) {
        // Push away gracefully
        const force = Math.pow((maxDist - dist) / maxDist, 2); // non-linear force
        const pushX = (dx / dist) * force * 30; // max 30px push
        const pushY = (dy / dist) * force * 30;
        const rotate = (dx / dist) * force * 20; // max 20deg rotation

        // If sitting, hide or squish slightly
        const scale = state === 'sitting' && dist < 60 ? 0.9 : 1;
        const opacity = state === 'sitting' && dist < 60 ? 0.4 : 1;

        controls.start({
          x: pushX,
          y: pushY,
          rotate: rotate,
          scale: scale,
          opacity: opacity,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        });
      } else {
        // Return to normal
        controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        });
      }
    };

    window.addEventListener('cat-move', handleCatMove as EventListener);
    return () => {
      window.removeEventListener('cat-move', handleCatMove as EventListener);
      window.removeEventListener('resize', updatePos);
      clearTimeout(timer);
    };
  }, [controls]);

  return (
    <>
      <motion.span
        ref={ref}
        animate={controls}
        className="inline-block origin-center"
      >
        {word}
      </motion.span>
      {' '}
    </>
  );
}
