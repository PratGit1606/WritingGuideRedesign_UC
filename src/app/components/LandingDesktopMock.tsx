'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const MOCK_SRC = '/Tool%20mock-up.png';

export default function LandingDesktopMock() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.25'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.6,
  });

  const y = useTransform(progress, [0, 0.4, 0.7, 1], [56, 0, -24, -48]);
  const rotateX = useTransform(progress, [0, 0.4, 0.7, 1], [14, 0, -4, -6]);
  const scale = useTransform(progress, [0, 0.4, 0.7, 1], [0.92, 1, 0.98, 0.95]);
  const shadowOpacity = useTransform(progress, [0, 0.4], [0.15, 0.45]);

  return (
    <div
      ref={ref}
      className="w-full max-w-5xl mx-auto -mt-2 md:-mt-6 lg:-mt-10"
      style={{ perspective: '1400px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
        style={{
          y,
          rotateX,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform"
      >
        <Image
          src={MOCK_SRC}
          alt="Writing Guide tool preview"
          width={1903}
          height={1399}
          className="w-full h-auto block"
          priority
          sizes="(max-width: 1280px) 100vw, 1024px"
        />
        <motion.div
          style={{ opacity: shadowOpacity }}
          className="h-6 md:h-8 w-[85%] max-w-3xl mx-auto rounded-[100%] bg-black/35 blur-2xl -mt-2 md:-mt-3"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
