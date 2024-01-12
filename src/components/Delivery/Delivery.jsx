
import React from 'react';
import photFork from '../../assets/images/photo_on_work.jpg'
import photoDelivery from '../../assets/images/photo_delivery.jpg'
import photoForest from '../../assets/images/photo_into_forest.jpg'
import { FcOk } from "react-icons/fc";

function Delivery() {
  return (
    <div>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
          <symbol id="check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
          </symbol>
          <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
          </symbol>
          <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
          </symbol>
          <symbol id="sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
          </symbol>
        </svg>

        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (dark)">
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                Light
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark" aria-pressed="true">
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
                Dark
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
              </button>
            </li>
          </ul>
        </div>
        <main className="container-fluid">
          <p className='text-center display-3'>Доставкa</p>
          <div>
            <ul className="">
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> осуществляем оперативную доставку колотых дров по территории Гродно и Гродненской области</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> oбратите внимание, минимальный объем заказа от <span className='text-danger'>1-го</span> кубометрa</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> сроки доставки оговариваются индивидуально, в среднем 1-3 дня</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> разгрузка входит в общую стоимость доставки. Дрова выгружают в месте, позволяющем подъехать машиной</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> для доставки используются грузовые автомобили вместительностью до 5 кубов (навальных)</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> стоимость доставки зависит от Вашего местоположения</li><br></br>
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> для получения более подробной информации по организации доставки колотых дров, свяжитесь с нами удобным для Вас <a className="text-decoration-none" href="/contacts">способом</a></li>
            </ul>
          </div><br></br>
          <p className='text-center display-3'>Оплата</p>
          <div>
            <ul className="">
              <li className="fs-3 list-group-item list-group-item-action"><FcOk /> oплата осуществляется наличным либо безналичным расчетом (при заказе <a className="text-decoration-none" href="/about-as"> юридическими лицами</a>)</li>
            </ul>
          </div><br></br>
          <div className="row" data-masonry="{&quot;percentPosition&quot;: true }" >
            <div className="col-sm-6 col-lg-4 mb-4" >
              <div className="card">
                <img src={photFork} width="100%" height="620" alt="Here should be photo is trees" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="card">
                <img src={photoDelivery} width="100%" height="460" alt="Here should be photo is trees" />
                <div className="card-body">
                  <h5 className="card-title">Выгрузка в удобном для вас месте</h5><br></br>
                  <figcaption className="blockquote-footer mb-0 text-body-secondary text-center">
                    <cite title="Source Title">Darim Teplo</cite>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4" >
              <div className="card text-center">
                <div className="card-body">
                  <img src={photoForest} width="100%" height="360" alt="Here should be photo is trees" />
                  <p className="card-title fs-3">Дрова пиленные в чурках</p><br></br>
                  <figcaption className="blockquote-footer mb-0 text-body-secondary">
                    <cite title="Source Title">Darim Teplo</cite>
                  </figcaption>
                </div>
              </div>
            </div>

          </div>
        </main>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script async="" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>
      </body>
    </div>
  );
};

export default Delivery


