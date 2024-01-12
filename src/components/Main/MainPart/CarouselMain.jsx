import Carousel from 'react-bootstrap/Carousel';
import photoCarTrees3 from '../../../assets/images/photo_3_car_trees.jpg';
import delivery from '../../../assets/images/photo_delivery.jpg'
import photo from '../../../assets/images/photo_into_forest.jpg'
import s from './MainPart.module.css'

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className={s.image}>
          <img src={photoCarTrees3}   alt="Here should be photo is trees" />
        </div>
        <Carousel.Caption>
          <div className='text-dark'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img src={photo}  alt="Here should be photo is trees" />
        </div>
        <Carousel.Caption>
          <div className='text-dark'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.image}>
          <img src={delivery}  />
        </div>
        <Carousel.Caption>
          <div className='text-dark'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;
