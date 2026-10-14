import React from 'react';
import { NeuralPlexus3D, NeuralPlexusFallback } from './NeuralPlexus3D';

// Backward-compatible alias for existing imports
export const SpatialGlass3D: React.FC = () => {
  return <NeuralPlexus3D />;
};

export const SpatialGlassFallback: React.FC = () => {
  return <NeuralPlexusFallback />;
};

export default SpatialGlass3D;
