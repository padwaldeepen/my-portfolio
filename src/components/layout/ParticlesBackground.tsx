import React from 'react';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import { Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';

interface ParticlesBackgroundProps {
  darkMode: boolean;
}

const PARTICLE_COLORS_LIGHT = [
  '#10b981', // emerald
  '#ffd740', // yellow
  '#ff80ab', // pink
  '#64b5f6', // blue
  '#b388ff', // purple
];

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSnowPreset(engine);
  }, []);

  // For light mode, generate an array of random colors for each particle
  const getLightModeColors = (count: number) =>
    Array.from(
      { length: count },
      () => PARTICLE_COLORS_LIGHT[Math.floor(Math.random() * PARTICLE_COLORS_LIGHT.length)],
    );

  const particleCount = 40;

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        preset: 'snow',
        background: { color: { value: 'transparent' } },
        fullScreen: { enable: false },
        particles: {
          color: {
            value: darkMode ? '#fff' : getLightModeColors(particleCount),
          },
          opacity: { value: 1 },
          move: { speed: 0.7 },
          number: { value: particleCount },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: { events: { onHover: { enable: false } } },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground;
