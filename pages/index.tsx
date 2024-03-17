import ColorPicker from "@/components/ColorPicker";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { COLORS } from "@/constant/theme";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Mesh, BoxGeometry, MeshStandardMaterial, Group } from "three";
import Laces from "@/components/Laces";
import Swiper from "swiper";
import Button from "@/constant/Button";
import Image from "next/image";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

const Materials = [
  "Laces",
  "Sole",
  "Mesh",
  "Caps",
  "Inner",
  "Stripes",
  "Band",
  "Patch",
];

interface Nodes {
  [key: string]: THREE.Mesh;
}

export function Model({ customColors }: any) {
  const group = useRef<Group | null>(null);
  const gltf = useGLTF("/shoe.gltf");
  const nodes: any = gltf.nodes || {};
  const materials = gltf.materials;

  // Define default colors for each material
  const defaultColors = {
    laces: "none", // Default color for laces
    mesh: "none", // Default color for mesh
    caps: "none", // Default color for caps
    inner: "none", // Default color for inner
    sole: "none", // Default color for sole
    stripes: "none", // Default color for stripes
    band: "none", // Default color for band
    patch: "none", // Default color for patch
  };

  // Merge default colors with custom colors
  const mergedColors = { ...defaultColors, ...customColors };

  return (
    <group ref={group}>
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

useGLTF.preload("/shoe.gltf");

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [material, setMaterial] = useState("");

  const [pickedColor, setPickedColor] = useState("");

  const handleColorPicked = (color: string) => {
    setPickedColor(color);
  };

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickMaterial = (material: string) => {
    setMaterial(material);
    setDropdownOpen(false);
  };

  const mesh = useRef<Mesh<BoxGeometry, MeshStandardMaterial>>(null);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    setTotalSlide(swiper.slides.length);
  };

  const handleSwiperInit = (swiper: Swiper) => {
    swiperRef.current = swiper;
    setTotalSlide(swiper.slides.length);
  };

  return (
    <ContentWrapper>
      <div style={styles.CanvasWrapper}>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Model customColors={{ [material.toLowerCase()]: pickedColor }} />
            <OrbitControls enablePan enableZoom enableRotate />
          </Suspense>
        </Canvas>
      </div>
      <div style={styles.CustomizationStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1440px",
          }}
        >
          <div style={{ zIndex: "2", position: "relative" }}>
            <Button endIcon="/down.png" onClick={handleDropdownOpen}>
              Shoe Material
            </Button>
            {dropdownOpen && (
              <div
                style={{
                  background: COLORS.white,
                  padding: "6px",
                  position: "absolute",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  borderRadius: "8px",
                  height: "120px",
                  overflow: "auto",
                }}
              >
                {Materials.map((materials, index) => (
                  <Button
                    fullWidth
                    key={index}
                    onClick={() => handleClickMaterial(materials)}
                  >
                    {materials}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <Image src={"/sneakers.png"} alt="image" width={50} height={50} />
          <div style={styles.PropHead}>
            <p style={{ fontWeight: "700" }}>{material ? material : "Laces"}</p>
            <span style={{ color: COLORS.darkGray }}>
              {currentSlide + 1}/{totalSlide}
            </span>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", maxWidth: "1440px" }}>
          <Laces
            onColorPicked={handleColorPicked}
            handleSlideChange={(swiper) => handleSlideChange(swiper)}
            handleSwiperInit={(swiper) => handleSwiperInit(swiper)}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

const styles = {
  CanvasWrapper: {
    width: "100%",
    height: "70vh",
    background: COLORS.darkGray,
  },
  CustomizationStyle: {
    width: "100%",
    height: "30vh",
    background: COLORS.background,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "36px 16px 60px",
    flexDirection: "column",
    position: "relative",
    gap: "16px",
    borderRadius: "8px 8px",
  } as React.CSSProperties,
  PropHead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  } as React.CSSProperties,
};

export default Index;
