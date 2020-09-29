import ParticleField from 'react-particles-webgl';

const particleConfig = {
  showCube: true,
  dimension: '3D',
  boundaryType: 'bounce',
  velocity: 2,
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    colorMode: 'rainbow',
    color: '#000000',
    transparency: 0.5,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 150,
    visible: true
  },
  particles: {
    colorMode: 'solid',
    color: '#000000',
    transparency: 0.5,
    shape: 'square',
    minSize: 10,
    maxSize: 75,
    visible: true
  },
  cameraControls: {
    enable: true,
    enableDamping: true,
    dampingFactor: 0.2,
    enableZoom: true,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    resetCameraFlag: false
  }
};

const Particles = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ParticleField config={particleConfig} />
    </div>
  );
};

export default Particles;
