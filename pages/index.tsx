import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { COLORS } from "@/constant/theme";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Laces from "@/components/Laces";
import Swiper from "swiper";
import Button from "@/constant/Button";
import Image from "next/image";
import {
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Loader } from "@/components/Loader";
import { Model } from "@/components/Model";

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
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 20]} />
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <hemisphereLight intensity={4} groundColor={"black"} />
            <pointLight intensity={3} />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
              shadow-mapSize={1024}
            />
            <PresentationControls
              speed={1.5}
              global
              zoom={0.7}
              polar={[0.3, Math.PI / 4]}
            >
              <group position={[0, 2, 0]}>
                <Stage environment={null} intensity={1}>
                  <Model
                    scale={4}
                    customColors={{ [material.toLowerCase()]: pickedColor }}
                  />
                </Stage>
              </group>
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                  blur={[300, 100]}
                  resolution={2048}
                  mixBlur={1}
                  mixStrength={40}
                  roughness={1}
                  depthScale={1.2}
                  minDepthThreshold={0.4}
                  maxDepthThreshold={1.4}
                  color="#101010"
                  metalness={0.5}
                  mirror={1}
                />
              </mesh>
            </PresentationControls>
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
