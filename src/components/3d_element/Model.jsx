import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/goldmolding_pyramid.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Gold}
      />
    </group>
  );
}

useGLTF.preload('/goldmolding_pyramid.glb');
