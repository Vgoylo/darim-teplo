import React from "react";
import SotialNetvork from "../Netvorks/SotialNetvorks";
import s from "./Footer.module.css";
import { GiSmallFire } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container-fluid">
        <div className="container-fluid">
          <footer className="py-5">
            <div className="row">
              <ul className="nav justify-content-center pb-1 mb-5 h2">
                <li className="nav-item">
                  <a href="main" className="nav-link px-5 text-black">
                    Главная
                  </a>
                </li>
                <li className="nav-item">
                  <HashLink
                    to="/productions#top"
                    className="nav-link px-5 text-black"
                  >
                    Продукция
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    to="/delivery#top"
                    className="nav-link px-5 text-black"
                  >
                    Доставка
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    to="/contacts#top"
                    className="nav-link px-5 text-black"
                  >
                    Контакты
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    to="/about-as#top"
                    className="nav-link px-5 text-black"
                  >
                    О нас
                  </HashLink>
                </li>
              </ul>
            </div>
            <hr className="border-bottom " />
            <div className="d-flex fs-4 flex-column flex-sm-row justify-content-between py-3 my-4">
              <p>
                <GiSmallFire />
                2024 Company Darim Teplo.
              </p>
              <hr className="featurette-divider" />
              <ul className="list-unstyled d-flex justify-content-center">
                <SotialNetvork />
                <li className="ms-3 col-auto d-none d-lg-block">
                  <svg className="bi" width="24" height="24"></svg>
                </li>
                <li className="ms-3 col-auto d-none d-lg-block">
                  <svg className="bi" width="24" height="24"></svg>
                </li>
                <li className="ms-3 col-auto d-none d-lg-block">
                  <svg className="bi" width="24" height="24"></svg>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </footer>
  );
}
