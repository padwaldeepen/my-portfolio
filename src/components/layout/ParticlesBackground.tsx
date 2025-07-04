import React from 'react';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import { Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';

interface ParticlesBackgroundProps {
  darkMode: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        preset: 'snow',
        background: { color: { value: 'transparent' } },
        fullScreen: { enable: false },
        particles: {
          color: { value: darkMode ? '#a5b4fc' : '#6366f1' },
          opacity: { value: 0.18 },
          move: { speed: 0.7 },
          number: { value: 40 },
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
