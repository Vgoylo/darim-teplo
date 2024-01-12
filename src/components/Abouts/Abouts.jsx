import { FcOk } from "react-icons/fc";
import delivery from '../../assets/images/photo_delivery.jpg'
import photo from '../../assets/images/photo_del_m.jpg'

function Abouts() {
  return (

    <div>
      <main>
        <div className="d-block p-2">
          <div className="p-2 mb-4 bg-body-white rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-3 fw-bold text-center">Darim Teplo</h1>
              <p className="lead my-3 fs-3">"DARIM TEPLO" занимается поставкой дров, которые являются самым надёжным и экологическим способом для отопления.
                В основном, это эксплуатация котлов, печей и других систем сжигания, которые способны использовать дрова для выработки энергии.
                В зонах с умеренным и холодным климатом особенно важно иметь автономность относительно обогрева помещения.
                DARIM TEPLO доставит в любую точку Гродненсконо области твердое топливо, которые можно применять для контроля микроклимата в отдельно стоящем доме
                в любое время года вне зависимости от общих инженерных сетей и коммунальных служб. В нашей компании «DARIM TEPLO» можно заказать нужное количество
                твердого топлива для отопления. Мы готовы привезти колотые дрова или пиленые чурки в течение нескольких дней. На заявку реагируем в день обращения.
                Доступны разные породы, стандартные размеры. Имеем колотые дрова разных пород дерева.
                Размер каждого полена соответствует стандартным размерам топки.</p>
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

            <h2 className="display-4  text-center">Реквизиты</h2><br></br>
            <ul className='fs-3 text-center'>
              <li className="list-group-item list-group-item-action">ИП Почебыт Геннадий Иванович</li><br></br>
              <li className="list-group-item list-group-item-action">Юридический адрес: Республика Беларусь, 230020, Гродненская область, Октябрьский район, г. Гродно, пр-т Клецкова, д. 21, кв. 12</li><br></br>
              <li className="list-group-item list-group-item-action">УНП: 591929289</li>
              <li className="list-group-item list-group-item-action">Р/с: BY47 BAPB 3012 2в64 3001 0000 0в00</li>
              <li className="list-group-item list-group-item-action">ОАО «Белагропромбанк» г. Минск, пр-т Победителей, д. 91.</li>
              <li className="list-group-item list-group-item-action">БИК: BыBBY2X</li>
            </ul><br></br>
          </div>
        </div>
      </main >
    </div >
  );
};

export default Abouts
