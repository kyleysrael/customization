import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import { COLORS } from "@/constant/theme";
import ColorPicker from "../ColorPicker";
import { BaseProps } from "./util";

const Base = ({ handleSlideChange, handleSwiperInit, onColorPicked }: BaseProps) => {
  const [pickedColorName, setPickedColorName] = useState("");
  const handleColorPicked = (name: string) => {
    setPickedColorName(name);
    onColorPicked(name);
  };

  return (
    <Swiper
      speed={500}
      effect={"fade"}
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y, EffectFade]}
      style={{ width: "100%", height: "100%" }}
      navigation
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      onSwiper={handleSwiperInit}
    >
      <SwiperSlide>
        <div style={styles.Slide}>
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.black} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.red} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.white} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.blue} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lightYellow} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.green} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.teal} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lightRed} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.brown} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lightBlue} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.darkGray} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.green} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.yellow} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lightGreen} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.darkRed} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.cyan} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.magenta} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.indigo} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lime} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.Slide}>
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.purple} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.pink} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.olive} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.maroon} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.navy} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.aqua} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.peach} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.lavender} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.darkGray} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.darkRed} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.navy} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.maroon} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.indigo} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.olive} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.brown} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.black} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.grey} />
          <ColorPicker onColorPicked={handleColorPicked} color={COLORS.darkRed} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const styles = {
  Slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    gap: "24px",
    background: COLORS.background,
    padding: "0 20px",
    flexWrap: "wrap",
    overflow: "auto",
  } as React.CSSProperties,
};

export default Base;
