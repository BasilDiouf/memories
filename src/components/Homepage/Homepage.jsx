import Nav from "../Nav/Nav";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <h1>MEMORIES</h1>
      <p>
        Bienvenue sur Memories! Ici vous pouvez partager votre mood du moment ou
        un souvenir. Créez votre <span className="memory">MEMORY</span> depuis
        votre espace utilisateur et partager le au reste de la communauté!
        Lancez vous!
      </p>
      <button className="create-memory">
        Créez Votre Premier <span className="memory">MEMORY</span>
      </button>
      <button className="visit-memory">
        Visitez <span className="memory">MEMORIES</span>
      </button>
    </div>
  );
};

export default Homepage;
