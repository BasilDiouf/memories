import React from "react";
import "./Memory.scss";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";

export const Memory = () => {
  return (
    <motion.div
      className="memory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Nav />
      <div className="memory-container">
        <div className="memory-left">
          <label htmlFor="memory-title">Titre de ton memory</label>
          <textarea
            id="memory-title"
            name="memory-title"
            rows={1}
            placeholder="UNE SUPER JOURNÉE !"
          ></textarea>
          <label htmlFor="memory-text">Raconte nous ton Histoire : </label>
          <textarea
            id="memory-text"
            name="memory-text"
            rows={8}
            cols={33}
            placeholder="Aujourd'hui, c'est en super forme que je me lève..."
          ></textarea>

          <button className="go-button">Pré-visualiser</button>
        </div>
        <div className="division-bar"></div>
        <div className="memory-right">
          <div className="memory-right-text">
            Ajoutez une photo illustrant votre memory
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Memory;
