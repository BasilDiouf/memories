import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { Link } from "react-router-dom";
import image1 from "./../../assets/photos/fuu-j-UM369yexrRg-unsplash.jpg";
import image2 from "./../../assets/photos/salvatore-tonnara-etcN-HM_JRU-unsplash.jpg";
import image3 from "./../../assets/photos/oleksandr-kurchev-LbTZDUY_8HE-unsplash.jpg";
import { motion } from "framer-motion";

import "./Carousel.scss";

export const Carousel = () => {
  let swiperLeft = new Swiper(".swiper-left", {
    effect: "slide",
    direction: "vertical",
    speed: 500,
    loop: false,
    allowTouchMove: false,
  });

  let swiperRight = new Swiper(".swiper-right", {
    speed: 1000,
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true,
  });

  swiperRight.controller.control = swiperLeft;

  return (
    <motion.div
      className="full-carousel"
      initial={{ opacity: 0, transition: { duration: 1 }, top: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Link to="/">
        <div className="return">
          <div className="return-arrow">{"<"}</div>
          <div className="return-bar"></div>
        </div>
      </Link>
      <div className="left">
        <div className="swiper-left">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div>
                <h2 className="mood-title">MON MOOD</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero nobis amet placeat doloribus minus quidem magni
                  voluptate ex ipsam eos sed praesentium quibusdam debitis natus
                  iste, qui labore, quis ducimus laudantium. Explicabo ipsa
                  error, nihil sit repellendus harum, odio commodi, maiores
                  fugit laboriosam ad omnis! Magnam voluptatem perferendis,
                  dolores ipsam voluptate eius laboriosam iure earum culpa odit.
                  Esse corporis voluptatibus, natus error tenetur unde saepe
                  ducimus est sequi
                </p>
              </div>
              <button className="go-button">VISIT</button>
              <div className="buttons">
                <button className="go-button">LIKE</button>
                <button className="go-button">SHARE</button>
              </div>
            </div>
            <div className="swiper-slide">
              <h2 className="mood-title">TON MOOD</h2>
              <p>
                Acimus est sequi accusamus nam facilis ipsa nobis dolorum
                incidunt obcaecati atque. Dolorum expedita recusandae deleniti
                voluptate rem nemo obcaecati, id quae voluptas esse autem
                dolores aut reiciendis a ipsum eos. Ab minus officiis, atque
                aperiam enim eveniet sequi voluptatem, accusamus quam,
                voluptatibus culpa aliquam pariatur sint?
              </p>
              <button className="go-button">VISIT</button>
              <div className="buttons">
                <button className="go-button">LIKE</button>
                <button className="go-button">SHARE</button>
              </div>
            </div>
            <div className="swiper-slide">
              <h2 className="mood-title">NOTRE MOOD</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                nobis amet placeat doloribus minus quidem magni voluptate ex
                ipsam eos sed praesentium quibusdam debitis natus iste, qui
                labore, quis ducimus laudantium. Explicabo ipsa error, nihil sit
                voluptatem, accusamus quam, voluptatibus culpa aliquam pariatur
                sint! Facilis repudiandae odit reprehenderit sapiente labore
                eveniet veritatis libero distinctio ab consequuntur ipsa
                voluptatibus delectus reiciendis deleniti quaerat exercitationem
                corporis, non architecto repellat ducimus quibusdam!
              </p>
              <button className="go-button">VISIT</button>
              <div className="buttons">
                <button className="go-button">LIKE</button>
                <button className="go-button">SHARE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="swiper-right">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={image1} />
            </div>
            <div className="swiper-slide">
              <img src={image2} />
            </div>
            <div className="swiper-slide">
              <img src={image3} />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </motion.div>
  );
};

export default Carousel;
