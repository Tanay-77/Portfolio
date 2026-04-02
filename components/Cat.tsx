'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

type CatState = 'idle' | 'walking' | 'sitting' | 'jumping';

export default function Cat({ parentRef }: { parentRef?: React.RefObject<HTMLElement | null> }) {
  const catX = useMotionValue(0);
  const catY = useMotionValue(0);
  const catRotation = useMotionValue(0);
  const catScaleX = useMotionValue(1);

  const smoothX = useSpring(catX, { damping: 25, stiffness: 120, mass: 1 });
  const smoothY = useSpring(catY, { damping: 25, stiffness: 120, mass: 1 });
  const smoothRotation = useSpring(catRotation, { damping: 20, stiffness: 100 });

  const [state, setState] = useState<CatState>('idle');
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/cat_sound.wav');
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
  };

  const internalContainerRef = useRef<HTMLDivElement>(null);
  const cursor = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const stateData = useRef({
    type: 'idle' as CatState,
    timer: 0,
    jumpTarget: { x: 0, y: 0 }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Use passed parentRef or fallback to internal parent element
    const parent = parentRef?.current || internalContainerRef.current?.parentElement;
    if (!parent) return;

    const startRect = parent.getBoundingClientRect();
    const startX = startRect.width / 2;
    const startY = startRect.height / 2;

    cursor.current = { x: startX, y: startY };
    current.current = { x: startX, y: startY };
    target.current = { x: startX, y: startY };
    catX.set(current.current.x);
    catY.set(current.current.y);
    
    console.log("Cat Initialized: ", { startX, startY, parentRect: startRect });

    const handleMouseMove = (e: MouseEvent) => {
      const parentRect = parent.getBoundingClientRect();
      const rawX = e.clientX - parentRect.left;
      const rawY = e.clientY - parentRect.top;
      
      // Clamp coordinates so the cat stays within the bounds of the section
      cursor.current = { 
        x: Math.max(32, Math.min(rawX, parentRect.width - 32)), 
        y: Math.max(32, Math.min(rawY, parentRect.height - 32)) 
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1); // cap dt to prevent huge jumps
      lastTime = time;

      const dxCursor = cursor.current.x - current.current.x;
      const dyCursor = cursor.current.y - current.current.y;
      const distToCursor = Math.hypot(dxCursor, dyCursor);

      stateData.current.timer -= dt;

      if (stateData.current.type === 'sitting') {
        if (stateData.current.timer <= 0 || distToCursor > 300) {
          stateData.current.type = 'idle';
          stateData.current.timer = Math.random() * 2 + 1;
          setState('idle');
        }
      } else if (stateData.current.type === 'jumping') {
        if (stateData.current.timer <= 0) {
          stateData.current.type = 'idle';
          stateData.current.timer = Math.random() * 2 + 1;
          setState('idle');
        } else {
          target.current = stateData.current.jumpTarget;
        }
      } else {
        if (distToCursor > 120) {
          stateData.current.type = 'walking';
          setState('walking');

          if (Math.random() < 0.005 && distToCursor > 250) {
            stateData.current.type = 'jumping';
            stateData.current.timer = 0.4;
            stateData.current.jumpTarget = { ...cursor.current };
            setState('jumping');
          } else {
            const angle = Math.atan2(dyCursor, dxCursor);
            target.current = {
              x: cursor.current.x - Math.cos(angle) * 60,
              y: cursor.current.y - Math.sin(angle) * 60
            };
          }
        } else {
          stateData.current.type = 'idle';
          setState('idle');
          target.current = { ...current.current };

          if (Math.random() < 0.005 && stateData.current.timer <= 0) {
            stateData.current.type = 'sitting';
            stateData.current.timer = Math.random() * 4 + 2;
            setState('sitting');
          }
        }
      }

      let speed = 0;
      if (stateData.current.type === 'walking') speed = 200;
      if (stateData.current.type === 'jumping') speed = 800;

      if (speed > 0) {
        const dx = target.current.x - current.current.x;
        const dy = target.current.y - current.current.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 5) {
          current.current.x += (dx / dist) * speed * dt;
          current.current.y += (dy / dist) * speed * dt;

          const angle = Math.atan2(dy, dx);
          catRotation.set(angle * (180 / Math.PI) * 0.15);

          if (dx > 0) {
            catScaleX.set(1);
          } else {
            catScaleX.set(-1);
          }
        }
      } else {
        catRotation.set(0);
      }

      catX.set(current.current.x);
      catY.set(current.current.y);

      // Calculate the viewport-relative position of the cat for the 'cat-move' event
      const parentRect = parent.getBoundingClientRect();
      const viewportX = parentRect.left + current.current.x;
      const viewportY = parentRect.top + current.current.y;

      // Dispatch event for text interaction
      window.dispatchEvent(new CustomEvent('cat-move', {
        detail: { x: viewportX, y: viewportY, state: stateData.current.type }
      }));

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [catX, catY, catRotation, catScaleX]);

  return (
    <motion.div
      ref={internalContainerRef}
      style={{
        x: smoothX,
        y: smoothY,
        rotate: smoothRotation,
        scaleX: catScaleX,
        position: 'absolute',
        top: -32,
        left: -32,
        width: 64,
        height: 64,
        zIndex: 50,
        pointerEvents: 'auto',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <CatSVG state={state} isHovered={isHovered} />
    </motion.div>
  );
}

function CatSVG({ state, isHovered }: { state: CatState, isHovered: boolean }) {
  const isWalking = state === 'walking';
  const isSitting = state === 'sitting';
  const isJumping = state === 'jumping';

  const bodyColor = "#2A2A2A";
  const eyeColor = "#FFF";

  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}>
      {/* Tail */}
      <motion.path
        d="M 16 40 Q 0 30 4 16"
        stroke={bodyColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        animate={{
          rotate: isSitting ? [0, 10, 0, -10, 0] : isWalking ? [0, 15, 0, -15, 0] : isHovered ? [0, 20, -10, 10, 0] : [0, 5, 0, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: isSitting ? 3 : isWalking ? 0.5 : isHovered ? 0.5 : 4,
          ease: "easeInOut"
        }}
        style={{ originX: "16px", originY: "40px" }}
      />

      {/* Back Legs */}
      <motion.line
        x1="18" y1="46" x2="18" y2="58"
        stroke={bodyColor} strokeWidth="5" strokeLinecap="round"
        animate={{
          rotate: isWalking ? [0, 30, 0, -30, 0] : isSitting ? 45 : 0,
          y: isSitting ? -5 : 0,
          x: isSitting ? 5 : 0,
        }}
        transition={isWalking ? { repeat: Infinity, duration: 0.5, ease: "linear" } : { type: "spring", stiffness: 300, damping: 20 }}
        style={{ originX: "18px", originY: "46px" }}
      />
      <motion.line
        x1="26" y1="46" x2="26" y2="58"
        stroke={bodyColor} strokeWidth="5" strokeLinecap="round"
        animate={{
          rotate: isWalking ? [0, -30, 0, 30, 0] : isSitting ? 45 : 0,
          y: isSitting ? -5 : 0,
          x: isSitting ? 5 : 0,
        }}
        transition={isWalking ? { repeat: Infinity, duration: 0.5, ease: "linear" } : { type: "spring", stiffness: 300, damping: 20 }}
        style={{ originX: "26px", originY: "46px" }}
      />

      {/* Body */}
      <motion.ellipse
        cx="32" cy="40" rx="20" ry="14"
        fill={bodyColor}
        animate={{
          scaleY: isJumping ? 0.8 : isSitting ? 1.1 : 1,
          scaleX: isJumping ? 1.2 : isSitting ? 0.9 : 1,
          y: isSitting ? 4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Front Legs */}
      <motion.line
        x1="40" y1="46" x2="40" y2="58"
        stroke={bodyColor} strokeWidth="5" strokeLinecap="round"
        animate={{
          rotate: isWalking ? [0, -30, 0, 30, 0] : 0,
          y: isSitting ? 4 : 0,
        }}
        transition={isWalking ? { repeat: Infinity, duration: 0.5, ease: "linear" } : { type: "spring", stiffness: 300, damping: 20 }}
        style={{ originX: "40px", originY: "46px" }}
      />
      <motion.line
        x1="48" y1="46" x2="48" y2="58"
        stroke={bodyColor} strokeWidth="5" strokeLinecap="round"
        animate={{
          rotate: isWalking ? [0, 30, 0, -30, 0] : 0,
          y: isSitting ? 4 : 0,
        }}
        transition={isWalking ? { repeat: Infinity, duration: 0.5, ease: "linear" } : { type: "spring", stiffness: 300, damping: 20 }}
        style={{ originX: "48px", originY: "46px" }}
      />

      {/* Head Group */}
      <motion.g
        animate={{
          y: isSitting ? 6 : isJumping ? 2 : isHovered ? -2 : 0,
          x: isJumping ? 4 : 0,
          rotate: isHovered ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 20 },
          rotate: { repeat: isHovered ? Infinity : 0, duration: 0.5 }
        }}
        style={{ originX: "46px", originY: "28px" }}
      >
        {/* Ears */}
        <motion.polygon
          points="38,20 44,6 50,20"
          fill={bodyColor}
          animate={{ rotate: isHovered ? [0, -15, 0] : 0 }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 0.3, repeatDelay: 1 }}
          style={{ originX: "44px", originY: "20px" }}
        />
        <motion.polygon
          points="46,20 54,8 58,22"
          fill={bodyColor}
          animate={{ rotate: isHovered ? [0, 15, 0] : 0 }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 0.3, repeatDelay: 1.2 }}
          style={{ originX: "52px", originY: "20px" }}
        />

        {/* Head */}
        <circle cx="46" cy="28" r="14" fill={bodyColor} />

        {/* Eyes */}
        <motion.ellipse
          cx="52" cy="26" rx="2" ry="3" fill={eyeColor}
          animate={{ scaleY: isSitting ? [1, 0.1, 1] : 1 }}
          transition={{ repeat: isSitting ? Infinity : 0, duration: 4, times: [0, 0.05, 0.1] }}
        />
        <motion.ellipse
          cx="58" cy="26" rx="2" ry="3" fill={eyeColor}
          animate={{ scaleY: isSitting ? [1, 0.1, 1] : 1 }}
          transition={{ repeat: isSitting ? Infinity : 0, duration: 4, times: [0, 0.05, 0.1] }}
        />

        {/* Nose */}
        <polygon points="55,30 54,32 56,32" fill="#FFAAAA" />
      </motion.g>
    </svg>
  );
}
