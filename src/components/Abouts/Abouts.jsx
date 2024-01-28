import { FcOk } from "react-icons/fc";
import delivery from '../../assets/images/photo_delivery.jpg'
import photo from '../../assets/images/photo_del_m.jpg'
import ReadMoreLess from './ReadMoreLess'

function Abouts() {
  return (

    <div>
      <main>
        <div className="d-block p-2">
          <div className="p-2 mb-4 bg-body-white rounded-3">
            <div className="container-fluid py-5" id="top">
              <h1 className="display-3 fw-bold text-center">Darim Teplo</h1>
              <ReadMoreLess />
            </div>
          </div>
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className=" p-2 text-bg-white rounded-3">
                <p className="text-center display-2">Ваши преимуществa работая с нами</p><br></br>
                <ul>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Лучшая стоимость</li><p className='fs-3'>Вы получаете лучшую цену на рынке на покупку колотых дров.</p>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Дрова под размер</li><p className='fs-3'>Услуга распила дров под нужный размер или любой вариант от 25 до 50 см.</p>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Быстрая доставка</li><p className='fs-3'>Собственный автопарк, позволяющий оперативно доставлять продукцию.</p>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Качественная древесина</li><p className='fs-3'>Без гнили и трухи. Мы заботимся о качестве поставляемой продукции.</p>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Естественная сушка</li><p className='fs-3'>Мы предлагаем дрова с естественной сушкой.</p>
                  <li className="fs-1 list-group-item list-group-item-action"><FcOk /> Дрова от производителя</li><p className='fs-3'>Вы получаете продукцию от компании производителя, никаких посредников.</p>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-5 text-bg-white">
                <img src={delivery} width="100%" alt="Here should be photo is trees" />

                <hr className="featurette-divider" />

                <img src={photo} width="100%" alt="Here should be photo is trees" />
              </div>
            </div>
            <hr className="featurette-divider" />

            <h2 className="display-4  text-center" id="details">Реквизиты</h2><br></br>
            <ul className='fs-3 text-center'>
              <li className="list-group-item list-group-item-action">ИП Почебыт Геннадий Иванович</li><br></br>
              <li className="list-group-item list-group-item-action">Юридический адрес: Республика Беларусь, 230020, Гродненская область, Октябрьский район, г. Гродно, пр-т Клецкова, д. 21, кв. 12</li><br></br>
              <li className="list-group-item list-group-item-action">УНП: 591929289</li>
              <li className="list-group-item list-group-item-action">Р/с: BY90 AKBB 3013 0000 6895 1400 0000</li>
              <li className="list-group-item list-group-item-action">ОАО АСБ «Беларусбанк» г. Гродно,  ул.Новооктябрьская, 5</li>
              <li className="list-group-item list-group-item-action">БИК: 591929289</li>
            </ul><br></br>
          </div>
        </div>
      </main >
    </div >
  );
};

export default Abouts
