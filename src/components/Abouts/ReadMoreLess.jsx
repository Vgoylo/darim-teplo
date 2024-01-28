import React, { useState } from "react";

function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      <span className="lead my-3 fs-3 bd-example">
        "DARIM TEPLO" занимается поставкой дров, которые являются самым надёжным и
        экологическим способом для отопления.В основном, это эксплуатация котлов,
        печей и других систем сжигания, которые способны использовать дрова для выработки энергии.
      </span>
      {isShowMore && (
        <span className="lead my-3 fs-3 bd-example">
          DARIM TEPLO доставит в любую точку Гродненсконо области твердое топливо,
          которые можно применять для контроля микроклимата в отдельно стоящем доме.
          В нашей компании «DARIM TEPLO» можно заказать нужное количество
          твердого топлива для отопления. Мы готовы привезти колотые дрова или пиленые чурки
          в течение нескольких дней. На заявку реагируем в день обращения.
        </span>
      )}
      <p>
        <button className="btn btn-link text-decoration-none" onClick={toggleReadMoreLess}>
          {isShowMore ? "Свернуть" : "Читать больше"}
        </button>
      </p>

    </div>
  );
}

export default ReadMoreLess;
