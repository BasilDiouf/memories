import { useState } from "react";
import img1 from "./../../assets/img/luise-and-nic-bKBWGTASTKY-unsplash.jpg";
import img2 from "./../../assets/img/mos-design-isDYrkDaXZc-unsplash.jpg";
import img3 from "./../../assets/img/neom-kzEFwhXPXwo-unsplash.jpg";
import img4 from "./../../assets/img/Jungle-Wallpapers-HD.jpg";
import img5 from "./../../assets/img/danny-howe-bn-D2bCvpik-unsplash.jpg";
import img6 from "./../../assets/img/neon-tropical-monstera-leaf-banner.jpg";
import img7 from "./../../assets/img/jc-gellidon-f8NlPwtC-vU-unsplash.jpg";
import img8 from "./../../assets/img/eduardo-ramos-BlrDYiXYuBU-unsplash.jpg";
import img9 from "./../../assets/img/maria-teneva-SXwCyG4FoPk-unsplash.jpg";
import img10 from "./../../assets/img/neom-i60yUhfWeYI-unsplash.jpg";
import img11 from "./../../assets/img/philip-myrtorp-p1AYJ3WaukM-unsplash.jpg";
import img12 from "./../../assets/img/vaclav-pechar-w_S4156HjSE-unsplash.jpg";
import img13 from "./../../assets/img/austin-schmid-6JORxMp41ls-unsplash.jpg";
import img14 from "./../../assets/img/europeana-aORpyBueBHE-unsplash.jpg";
import img15 from "./../../assets/img/hennie-stander-BtHtZsGvdD0-unsplash.jpg";
import img16 from "./../../assets/img/sergey-vinogradov-xoF6tu4DafA-unsplash.jpg";
import img17 from "./../../assets/img/kazuo-ota-VuzbZMHX_sU-unsplash.jpg";
import img18 from "./../../assets/img/jemimah-gray-ehTjAGnylco-unsplash.jpg";
import img19 from "./../../assets/img/marcus-ganahl-eufDpZJN3Ac-unsplash.jpg";
import "./../Gallery/Gallery.scss";
import CloseIcon from "@mui/icons-material/Close";
export const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimpSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimpSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
