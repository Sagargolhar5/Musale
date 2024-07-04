import React from "react";
import image1 from "../assets/GallaryImage1.jpg";
import image2 from "../assets/GallaryImage2.jpg";
import image3 from "../assets/GallaryImage3.jpg";
import image4 from "../assets/GallaryImage4.jpg";
import Video from "../components/Video";

const Gallary = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <Video />
      </div>
    </>
  );
};

export default Gallary;

const images = [
  {
    id: 1,
    image: image1,
    item: 535,
  },
  {
    id: 2,
    image: image2,
    item: 191,
  },
  {
    id: 3,
    image: image3,
    item: 16,
  },
  {
    id: 4,
    image: image4,
    item: 5,
  },
];
