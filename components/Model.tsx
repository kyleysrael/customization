import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export function Model({ customColors }: any) {
  const group = useRef<Group | null>(null);
  const gltf = useGLTF("/shoe.gltf");
  const nodes: any = gltf.nodes || {};
  const materials = gltf.materials;

  const mergedColors = { ...customColors };

  return (
    <group ref={group} scale={4}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={mergedColors.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={mergedColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={mergedColors.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={mergedColors.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={mergedColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={mergedColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={mergedColors.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={mergedColors.patch}
      />
    </group>
  );
}
