import React from "react";
import s from '../Footer/Footer.module.css'
import logo_viber from '../../assets/logo/logo_viber.png'
import logo_call from '../../assets/logo/logo_call.png'
import logo_instagram from '../../assets/logo/logo_instagram.png'
import logo_telegram from '../../assets/logo/logo_telegram.png'

export default function sotialNetvork() {
  return (

    <ul className="nav col-md-9  list-unstyled d-flex display-5">
      <div className={s.gain_center}>
        <li className="ms-3"><a className="text-decoration-none link-warning" href="viber://add?number=+375(29)299-99-27" target="_blank">
          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis border-secondary-subtle rounded-pill">
            <img className="rounded-circle me-1" width="54" height="54" src={logo_viber} alt="" />
          </span></a></li>
      </div>
      <div className={s.gain_center}>
        <li className="ms-3"> <a className="text-decoration-none link-info" href="https://t.me/ti_tolko_daj_znat" target="_blank">
          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis border-secondary-subtle rounded-pill">
            <img className="rounded-circle me-1" width="54" height="54" src={logo_telegram} alt="telegram" />
          </span></a></li>
      </div>
      <div className={s.gain_center}>
        <li className="ms-3"><a className="text-decoration-none link-info" href="https://www.instagram.com/vitaliigoilo?igsh=NWQ2d2Z2YjF2bzBn&utm_source=qr" target="_blank">
          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis  border-secondary-subtle rounded-pill">
            <img className="rounded-circle me-1" width="54" height="54" src={logo_instagram} alt="instagram" />
          </span>
        </a></li>
      </div>
      <div className={s.gain_center}>
        <li className="ms-3"><a className="text-decoration-none link-info" href="tel:+3759(29) 894-63-77">
          <span className="badge d-flex align-items-center p-0 pe-0 text-secondary-emphasis  border-secondary-subtle rounded-pill">
            <img className="rounded-circle me-1" width="59" height="59" src={logo_call} alt="" />
          </span>
        </a></li>
      </div>
    </ul>
  );
}
