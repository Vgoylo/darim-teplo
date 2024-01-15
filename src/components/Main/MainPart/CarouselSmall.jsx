import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo_20_years from '../../../assets/logo/logo_20_yers.jpg'
import logo_1_cub from '../../../assets/logo/logo_cub.jpg'
import logo_self_car from '../../../assets/logo/logo_mers.jpg'
import logo_calculation from '../../../assets/logo/logo_cost.png'
import { HashLink } from 'react-router-hash-link';

function Car() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel responsive={responsive}>
      <div className="col-lg-5 text-center">
        <img className="rounded-circle me-1 border border border-secondary-subtle rounded-pill" width="144" height="144" src={logo_20_years} alt="logo_20_years" />
        <h3 className="fw-normal ">20 лет на рынке</h3>
      </div>
      <div className="col-lg-4 text-center">
        <img className="rounded-circle me-1 border border border-secondary-subtle rounded-pill" width="144" height="144" src={logo_1_cub} alt="logo_cub" />
        <h4 className="fw-normal">Доставка от <span className='text-danger'>1-го</span> кубометрa</h4>
      </div>
      <div className="col-lg-3 text-center">
        <img className="rounded-circle me-1 border border border-secondary-subtle rounded-pill" width="144" height="144" src={logo_self_car} alt="mers" />
        <h4 className="fw-normal">Собственный автопарк</h4>
      </div>
      <div className="col-lg-2 text-center">
        <img className="rounded-circle me-1 border border border-secondary-subtle rounded-pill" width="144" height="144" src={logo_calculation} alt="calculation" />
        <h4 className="fw-normal">Наличный <HashLink to="/about-as#details" className="text-decoration-none">безналичный </HashLink>расчет </h4>
      </div>
    </Carousel>
  );

}

export default Car;
