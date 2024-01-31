import s from './Productions.module.css';

function Productions() {
  return (
    <div>
      <main className="container-fluid">
        <div className="p-2 p-md-1 mb-2 rounded text-body-emphasis bg-body-secondary">
          <div className="container-fluid py-5" id='top'>
            <h1 className="display-4 fw-bold fst-italic text-center" >Мы готовы предложить</h1>
          </div>
        </div>
        <div className="album py-5 center" >
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className={s.center}>
                      <img width="75%" src='https://st9.stpulscen.ru/images/product/141/102/369_original.jpg' />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text"><ul className="fs-4">
                      <h2>Дрова березовые</h2>
                      Березовые дрова наиболее популярны среди
                      потребителей в дачных кооперативах, при
                      использовании в мангале для жарки
                      найвкуснейшего шашлыка, топки бани и сауны.
                      <div className="text-success">Стоимость за 1м(3) уточняйте при оформлении заявки</div>
                    </ul></p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className={s.center}>
                      <img width="85%" src='https://m-files.cdnvideo.ru/lpfile/f/5/2/f525e547b3723e36e31c0641b9da57e5/-/resize/600/f.jpeg' />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text"><ul className="fs-4">
                      <h2>Дрова микс</h2>
                      Смесь лиственных пород, березы, ольхи, осины и хвойных пород древесины.
                      Подходят для использования во всех видах печей,
                      котлов и каминов.
                      Идеальное соотношение
                      цена-качество.
                      <div className="text-success">Стоимость за 1м(3) уточняйте при оформлении заявки</div>
                    </ul></p>
                    <div className="list-group-item list-group-item-action">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className={s.center}>
                      <img width="85%" src='https://m-files.cdnvideo.ru/lpfile/f/f/4/ff4294176708554557df5cf905d7b596/-/resize/600/f.jpeg' />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text"><ul className="fs-4">
                      <h2>Дрова ольховые</h2>
                      Ольховые дрова издревне славятся своими
                      целебными свойствами при горении и
                      минимальным количеством дыма, <span className="text-decoration-underline">за что и
                        нареклись в народе "царскими" дровами</span>, так как
                      использовались при топке царской бани по черному.
                      <div className="text-success">Стоимость за 1м(3) уточняйте при оформлении заявки</div>
                    </ul></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className={s.center}>
                      <img width='85%' src='https://m-files.cdnvideo.ru/lpfile/c/0/8/c086245363520a5cc307098eb2072607/-/resize/600/f.jpeg' />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text"><ul className="fs-4">
                      <p className='text-center h2'>Дрова хвойных пород (сухие? *)</p>
                      Дрова хвойных пород имеют высокий коэффициент теплоотдачи,
                      дают большое количество жара, распространяя непередаваемый смолистый запах.
                      Тонизирующе воздействуют на дыхательные органы.
                      <div className="text-success">Стоимость за 1м(3) уточняйте при оформлении заявки</div>
                      <small className="text-body-secondary fs-6">( * уточнение по наличию при заказе)</small>
                    </ul></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Productions;
