import React from 'react'
import img10 from '../../img/img10.png'
import tel from '../../img/tel.png'
import sms from '../../img/sms.png'
import gps from '../../img/gps.png'
import './Kontakt.css'
function Kontakt() {
  return (
    <div id='Kontakt' className="kontakt">
      <div className="kontakt__left">
        <ul>
          <li>
            <img src={img10} alt="" />
            <div className="columb">
              <b>Веб сайт</b>
              <a href="https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15">digitalcity.uz</a>
            </div>
          </li>
          <li>
            <img src={tel} alt="" />
            <div className="columb">
              <b>Телефон</b>
              <a href="tel:+99874 222-22-22">+99874 222-22-22</a>
            </div>
          </li>
          <li>
            <img src={sms} alt="" />
            <div className="columb">
              <b>Почта</b>
              <a href="https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15">dcity@ info.com</a>
            </div>
          </li>
          <li>
            <img src={gps} alt="" />
            <div className="columb">
              <b>Адресс</b>
              <a href="https://yandex.uz/maps/org/244577402097/?ll=72.356849%2C40.746957&z=15">улица Бобур Шох, Andizhan, Узбекистан</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="kontakt__right">
        <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6610169292626!2d72.35738321501972!3d40.747483979328166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2sus!4v1674294386958!5m2!1sru!2sus" frameborder="0"></iframe>
      </div>
    </div>
  )
}
export default Kontakt