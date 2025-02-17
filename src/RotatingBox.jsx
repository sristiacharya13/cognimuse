// RotatingBox.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

const RotatingBox = () => {
  return (
    <Canvas style={{ height: '200px', width: '200px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <motion.mesh
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 2 * Math.PI }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        whileHover={{ scale: 1.2 }}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#00A1E4'} />
      </motion.mesh>
    </Canvas>
  );
};

export default RotatingBox;
