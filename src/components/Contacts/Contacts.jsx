import { FcCallback } from "react-icons/fc";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcClock } from "react-icons/fc";
import s from './Contacts.module.css'
import logo_kufar from '../../assets/logo/kufar.png'

export default function Contacts() {
  return (
    <div className="container-fluid" id="top">
      <h1 className="text-center display-4">Наши контакты:</h1><br></br>
      <ul>
        <div className={s.gain_right}>
          <li className="fs-3 list-group-item list-group-item-action"><FcCallback />  <a className="text-decoration-none" href="tel:+375(29) 894-63-77">+375 (29) 894-63-77</a></li><br></br>
        </div>
        <div className={s.gain_right}>
          <li className="fs-3 list-group-item list-group-item-action"><FcCallback /> <a className="text-decoration-none" href="tel:+375(33) 912 22 21">+375(33) 912-22-21</a></li>
        </div>
        <div className={s.gain_right}>
          <li className="list-group-item pb-1 "><a className="text-decoration-none link-info" href="https://www.kufar.by/customer/U2FsdGVkX19xyUTXCzw-NF5uH7ranWc1ai0amNt-4kA~" target="_blank">
            <img className="rounded-circle me-1" width="154" height="74" src={logo_kufar} alt="kufar" />
          </a></li>
        </div>
        <li className="fs-3 list-group-item list-group-item-action"><FaMapLocationDot /> 230010, г Гродно, пр-т Клецкова, д. 21, кв. 12</li><br></br>
        <li className="fs-3 list-group-item list-group-item-action"><FcClock /> Пн-Вс с 09:00 до 21:00</li><br></br>
      </ul>
    </div>
  );
}
