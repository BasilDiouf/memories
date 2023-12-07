import Link from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <div className="homepage__content">
        <h1 className="homepage__title">MEMORIES</h1>
        <p className="homepage__resume">
          Bienvenue sur Memories! Ici vous pouvez partager votre mood du moment
          ou un souvenir. Créez votre <span className="memory">MEMORY</span>{" "}
          depuis votre espace utilisateur et partager le au reste de la
          communauté! <br />
          <span className="memory">Lancez vous!</span>
        </p>
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
