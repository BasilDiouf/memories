import image3 from "./../../assets/photos/oleksandr-kurchev-LbTZDUY_8HE-unsplash.jpg";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <div>
        <img src={image3} />
      </div>
      <h1 className="profile-welcome">Bievenue Utilisateurs</h1>
    </div>
  );
};

export default ProfilePage;
