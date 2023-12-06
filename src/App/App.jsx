import "./App.scss";

import { CarouselWrapper } from "react-pretty-carousel";
import image1 from "./../assets/img/austin-schmid-6JORxMp41ls-unsplash.jpg";
import image2 from "./../assets/img/danny-howe-bn-D2bCvpik-unsplash.jpg";
import image3 from "./../assets/img/grab--Px2U8xjqv8-unsplash.jpg";
import image4 from "./../assets/img/luise-and-nic-bKBWGTASTKY-unsplash.jpg";
import image5 from "./../assets/img/marek-piwnicki-luD9ZsZkm3A-unsplash.jpg";
import image6 from "./../assets/img/mos-design-isDYrkDaXZc-unsplash.jpg";
import image7 from "./../assets/img/neom-I5j46lqAo-o-unsplash.jpg";

const App = () => {
  return (
    <div className="App">
      <CarouselWrapper items={1} mode="gallery" showControls={true}>
        <img
          className="img"
          src="https://images.theconversation.com/files/76631/original/image-20150331-1256-mz95ed.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt=""
        />
        <img className="img" src={image1} alt={"image1"} />
        <img className="img" src={image2} alt={"image2"} />
        <img className="img" src={image3} alt={"image3"} />
        <img className="img" src={image4} alt={"image4"} />
        <img className="img" src={image5} alt={"image5"} />
        <img className="img" src={image6} alt={"image6"} />
        <img className="img" src={image7} alt={"image7"} />
      </CarouselWrapper>
    </div>
  );
};

export default App;
