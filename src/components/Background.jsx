import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Triangles from "./Triangles";
import PortalCamera from "./PortalCamera";

const Background = () => {
  return (
    <Canvas
      className="fixed top-0 left-0 w-full h-full -z-10"
      camera={{ position: [0, 0, 8], fov: 75 }}
    >
      <color attach="background" args={['black']} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <Triangles />
      
    </Canvas>
  );
};

export default Background;
