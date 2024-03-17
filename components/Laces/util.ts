interface OnColorPicked {
  (color: string): void;
}
export interface BaseProps {
  handleSlideChange: (swiper: any) => void;
  handleSwiperInit: (swiper: any) => void;
  onColorPicked: OnColorPicked;
}
