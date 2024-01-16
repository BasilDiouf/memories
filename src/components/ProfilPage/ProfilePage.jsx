import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./ProfilePage.scss";
import { Gallery } from "../Gallery/Gallery";
import "react-multi-carousel/lib/styles.css";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      {/* <div className="profile-photo">
        <img src={image3} />
      </div> */}
      {/* <h1 className="profile-welcome">Bievenue User</h1> */}
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <div className="profil-section">ALL YOUR MEMORIES</div>
          </FullpageSection>
          <FullpageSection>
            <Gallery />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default ProfilePage;
