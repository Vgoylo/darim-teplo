import Carousel from "react-bootstrap/Carousel";
import photoCarTrees3 from "../../../assets/images/photo_3_car_trees.jpg";
import delivery from "../../../assets/images/photo_delivery.jpg";
import photo from "../../../assets/images/photo_into_forest.jpg";
import photocar from "../../../assets/images/photo_on_work.jpg";
import photocar2 from "../../../assets/images/kufar1cub.jpg";
import photo1 from "../../../assets/images/photo1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import s from "./MainPart.module.css";

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className={s.image}>
          <img src={photoCarTrees3} alt="Here should be photo is trees" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img src={photo} alt="Here should be photo is trees" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img src={delivery} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img
            src={photocar2}
            width="50%"
            height="720px"
            alt="Here should be photo is trees"
          />
          <img
            src={photocar}
            width="50%"
            height="720px"
            alt="Here should be photo is trees"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img
            src={photo1}
            width="50%"
            height="720px"
            alt="Here should be photo is trees"
          />
          <img
            src={photo2}
            width="50%"
            height="720px"
            alt="Here should be photo is trees"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;
