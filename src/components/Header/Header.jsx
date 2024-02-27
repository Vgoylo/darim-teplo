import React from "react";
import s from "./Header.module.css";
import logo_main from "../../assets/logo/logo_main.png";
import logo_trees from "../../assets/logo/logo_header_trees.png";
import logo_delivery from "../../assets/logo/logo_header_delivery.png";
import logo_call from "../../assets/logo/logo_call2.png";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className={s.header}>
      <div className="container-fluid">
        <header>
          <div className="row flex-nowrap justify-content-between align-items-center d-none d-lg-block">
            <div className="text-center  container-fluid py-5 fw-bold fst-italic">
              <a
                className="blog-header-logo text-decoration-none link-dark"
                href="#"
              >
                <span className={s.text}>Darim Teplo</span>{" "}
              </a>
            </div>
          </div>
          <br></br>
        </header>
        <hr className="border-bottom " />
        <div className="nav-scroller mb-3"></div>
        <br></br>
        <nav className="nav nav-underline justify-content-around display-6 ">
          <a className="text-decoration-none link-warning" href="main">
            <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
              <img
                className="rounded-circle me-1 img:hover"
                width="54"
                height="54"
                src={logo_main}
                alt="logo_main"
              />
              Главная
            </span>
          </a>
          <HashLink to="/productions#top" className="text-decoration-none">
            <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
              <img
                className="rounded-circle me-1"
                width="54"
                height="54"
                src={logo_trees}
                alt="logo_trees"
              />
              Продукция
            </span>
          </HashLink>
          <HashLink to="/delivery#top" className="text-decoration-none">
            <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
              <img
                className="rounded-circle me-1"
                width="54"
                height="54"
                src={logo_delivery}
                alt="logo_delivery"
              />
              Доставка и оплата
            </span>
          </HashLink>
          <HashLink to="/contacts#top" className="text-decoration-none">
            <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
              <img
                className="rounded-circle me-1"
                width="54"
                height="54"
                src={logo_call}
                alt="logo_call"
              />
              Контакты
            </span>
          </HashLink>
          <HashLink to="/about-as#top" className="text-decoration-none">
            <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
              <img
                className="rounded-circle me-1"
                width="54"
                height="54"
                src="https://st4.depositphotos.com/5040187/19683/v/450/depositphotos_196837102-stock-illustration-logo-swoosh-ellipse-green-letter.jpg"
                alt=""
              />
              О нас
            </span>
          </HashLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
