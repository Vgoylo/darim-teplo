import React from "react";
import s from "./MainPart.module.css";
import CarouselFadeExample from "./CarouselMain";
import { FcOk } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { HashLink } from "react-router-hash-link";
import logo_viber from "../../../assets/logo/logo_viber.png";
import logo_telegram from "../../../assets/logo/logo_telegram.png";
import photFork from "../../../assets/images/photo_on_work.jpg";
import photoDelivery from "../../../assets/images/photo_delivery.jpg";
import photoMainContacnt from "../../../assets/images/main_contacts.jpg";
import Car from "./CarouselSmall";

function MainPart() {
  return (
    <div>
      <main className="container-fluid">
        <div className="container marketing">
          <div className="p-4 col-auto d-none d-lg-block">
            <CarouselFadeExample />
          </div>
          <hr className="featurette-divider" />
          <Car />
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <p className="featurette-heading fw-normal lh-1 fs-2">
                Наша{" "}
                <span className="text-body-secondary">
                  <HashLink
                    to="/productions#top"
                    className="text-decoration-none"
                  >
                    продукция{" "}
                  </HashLink>
                </span>
                которую мы предлaгаем:{" "}
              </p>
              <div>
                <br></br>
                <ul className="">
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> колотые дрова разных пород
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> дрова пиленные в чурках
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> кругляк-длинномер от 5 до 10 кубов
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 ">
              <img
                src={photoDelivery}
                width="100%"
                height="330"
                alt="Here should be photo is trees"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <div className="container-fluid">
                <p className="text-center fs-2">
                  Вы можете связаться с нами удобным для Вас{" "}
                  <span className="text-body-secondary">
                    <HashLink
                      to="/contacts#top"
                      className="text-decoration-none"
                    >
                      способом
                    </HashLink>
                  </span>
                  :
                </p>
                <ul>
                  <div className={s.gain_center}>
                    <li className="fs-3 list-group-item list-group-item-action">
                      <FcCallback />{" "}
                      <a
                        className="text-decoration-none"
                        href="tel:+375(29) 894-63-77"
                      >
                        +375 (29) 894-63-77
                      </a>
                    </li>
                  </div>
                  <br></br>
                  <div className={s.gain_center}>
                    <li className="fs-3 list-group-item list-group-item-action">
                      <FcCallback />{" "}
                      <a
                        className="text-decoration-none"
                        href="tel:+375(33) 912-22-21"
                      >
                        +375(33) 912-22-21
                      </a>
                    </li>
                  </div>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcClock /> Пн-Вс с 09:00 до 21:00
                  </li>
                </ul>
                <br></br>
                <div className="list-group-item list-group-item-action ">
                  <ul className="nav col-md-8 justify-content list-unstyled d-flex display-5">
                    <div className={s.gain_center}>
                      <li className="ms-3">
                        <a
                          className="text-decoration-none link-warning"
                          href="viber://chat?number=+375(33) 912 22 21"
                        >
                          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis border-secondary-subtle rounded-pill">
                            <img
                              className="rounded-circle me-1"
                              width="54"
                              height="54"
                              src={logo_viber}
                              alt="viber"
                            />
                          </span>
                        </a>
                      </li>
                    </div>
                    <div className={s.gain_center}>
                      <li className="ms-3">
                        {" "}
                        <a
                          className="text-decoration-none link-info"
                          href="https://t.me/ti_tolko_daj_znat"
                        >
                          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis border-secondary-subtle rounded-pill">
                            <img
                              className="rounded-circle me-1"
                              width="54"
                              height="54"
                              src={logo_telegram}
                              alt="telegram"
                            />
                          </span>
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-4 col-auto d-none d-lg-block">
              <img
                src={photoMainContacnt}
                width="500"
                height="380"
                alt="photo Main Contacnt"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <p className="text-center fs-2">
                <HashLink to="/delivery#top" className="text-decoration-none">
                  Доставкa
                </HashLink>
              </p>
              <div>
                <ul className="">
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> доставку колотых дров по территории Гродно и
                    Гродненской области
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> минимальный объем заказа от{" "}
                    <span className="text-danger">1-го</span> кубометрa
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> сроки доставки в среднем 1-3 дня
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> разгрузка входит в общую стоимость доставки
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> используются грузовые автомобили вместительностью
                    до 5 кубов
                  </li>
                  <br></br>
                  <li className="fs-3 list-group-item list-group-item-action">
                    <FcOk /> стоимость доставки зависит от Вашего местоположения
                  </li>
                  <br></br>
                </ul>
              </div>
              <br></br>
            </div>
            <div className="col-md-5 p-4 col-auto d-none d-lg-block">
              <img
                src={photFork}
                width="500"
                height="560"
                alt="Here should be photo is trees"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPart;
