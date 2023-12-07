/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Homepage.scss";
import LoginBox from "../LoginBox/LoginBox";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <LoginBox />
      <div className="homepage__content">
        <h1 className="homepage__title">MEMORIES</h1>
        <p className="homepage__resume">
          Bienvenue sur Memories! Ici vous pouvez partager votre{" "}
          <span className="memory">"MOOD"</span> du moment ou un souvenir. Créez
          votre <span className="memory">MEMORY</span> depuis votre espace
          utilisateur et partager le au reste de la communauté! <br />
          <span className="memory-end">Lancez vous!</span>
        </p>
        {/* <p className="homepage__resume">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          perferendis id illo, laborum molestiae alias. Adipisci consectetur
          odio tempora necessitatibus vel, corrupti voluptatum repellendus
          assumenda! Minima, accusantium dolorum consequatur est reprehenderit
          modi iusto inventore odit non obcaecati exercitationem pariatur,
          doloremque, quod sit? Atque, voluptate sit. Alias quis maxime quam
          laboriosam maiores!
        </p> */}
        <button className="homepage__button-create">
          <span className="memory">CRÉEZ VOTRE MEMORY</span>
        </button>
        <Link to="/memories">
          <button className="homepage__button-visit">
            <span className="memory"> VISITEZ MEMORIES</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
