import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import style from './sliderImage.module.css'
import image1 from "../../assets/GallaryImage1.jpg";
import image2 from "../../assets/GallaryImage2.jpg";
import image3 from "../../assets/GallaryImage3.jpg";
import image4 from "../../assets/GallaryImage4.jpg";
const SliderImage = ({home}) => {
  const [imageNum, setImageNum] = useState(1);
  
  return (
    <div className={style.main} ref={home}>
      <SimpleImageSlider 
      className={style.slider}
        width="90%"
        height="35vmax"
        images={sliderImages}
        showBullets={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  );
};

export default SliderImage;

const sliderImages = [
  {
    url: image1,
    index: 1
  },
  {
    url: image2,
    index: 2
  },
  {
    url: image3,
    index: 3
  },
  {
    url: image4,
    index: 4
  },
];

