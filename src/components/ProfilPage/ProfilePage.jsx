import Carousel from "react-multi-carousel";
import mainLogo from "./../../assets/img/mos-design-isDYrkDaXZc-unsplash.jpg";
import "./ProfilePage.scss";
import "react-multi-carousel/lib/styles.css";

export const ProfilePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ProfilePage">
      {/* <div className="profile-photo">
        <img src={image3} />
      </div> */}
      {/* <h1 className="profile-welcome">Bievenue User</h1> */}
      <div className="profil-section">ALL YOUR MEMORIES</div>
      <Carousel responsive={responsive}>
        <div className="proifle-carousel">
          <img src={mainLogo} alt="" width={800} />
        </div>
        <div>
          <img src={mainLogo} alt="" width={800} />
        </div>
        <div>
          <img src={mainLogo} alt="" width={800} />
        </div>
        <div>
          <img src={mainLogo} alt="" width={800} />
        </div>
      </Carousel>
    </div>
  );
};

export default ProfilePage;
