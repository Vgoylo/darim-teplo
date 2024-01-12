import React from 'react';
import SotialNetvork from '../Netvorks/SotialNetvorks'
import s from './Footer.module.css'
import { GiSmallFire } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container-fluid">
        <div class="container-fluid">
          <footer class="py-5">
            <div class="row">
              <ul class="nav justify-content-center pb-1 mb-5 h2">
                <li className="nav-item"><a href="main" className="nav-link px-5 text-black">Главная</a></li>
                <li className="nav-item"><a href="productions" className="nav-link px-5 text-black">Продукция</a></li>
                <li className="nav-item"><a href="delivery" className="nav-link px-5 text-black">Доставка</a></li>
                <li className="nav-item"><a href="contacts" className="nav-link px-5 text-black">Контакты</a></li>
                <li className="nav-item"><a href="about-as" className="nav-link px-5 text-black">О нас</a></li>
              </ul>

            </div>
            <hr className="border-bottom " />
            <div class="d-flex fs-4 flex-column flex-sm-row justify-content-between py-3 my-4">
              <p><GiSmallFire />2023 Company Darim Teplo.</p>
              <hr className="featurette-divider" />
              <ul class="list-unstyled d-flex ">
                <SotialNetvork />
                <li class="ms-3 col-auto d-none d-lg-block"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                <li class="ms-3 col-auto d-none d-lg-block"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                <li class="ms-3 col-auto d-none d-lg-block"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </footer>
  );
};
