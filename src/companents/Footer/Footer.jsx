import React from 'react'
import logo from '../../img/img1.png'
import insta from '../../img/insta.png'
import telegram from '../../img/telegram.png'
import youtube from '../../img/youtube.png'
import face from '../../img/face.png'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
      <div className="foot">
        <div className="foot__left">
          <img src={logo} alt="" />
          <p>GIRLS IN DIGITAL</p>
        </div>
        <div className="foot__center">
          <ul>
            <li>
              <a href="#Proekt">
                <b>О Проекте</b>
              </a>
            </li>
            <li>
              <a href="#Naprav">
                <b>Направления</b>
              </a>
            </li>
            <li>
              <a href="#Result">
                <b>Результаты</b>
              </a>
            </li>
            <li>
              <a href="#Kontakt">
                <b>Контакты</b>
              </a>
            </li>
          </ul>
        </div>
        <div className="foot__right">
          <p>Уз Ру</p>
          <a href="https://www.instagram.com/">
            <img src={insta} alt="" />
          </a>
          <a href="https://web.telegram.org/">
            <img src={telegram} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={face} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer