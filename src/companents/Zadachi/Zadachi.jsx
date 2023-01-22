import React from 'react'
import './Zadachi.css'
function Zadachi() {
  return (
    <div id='Zadachi' className='Zadachi'>
      <div className="zas">
        <p className='zad'>Задачи</p>
        <ul>
          <li className='no'>
            <b>01</b>
            <p>Подбор рабочей группы</p>
          </li>
          <li className='no'>
            <b>02</b>
            <p>Установить контакт с партнерами</p>
          </li>
          <li className='no'>
            <b>03</b>
            <p>Закупка офисной техники</p>
          </li>
          <li className='no'>
            <b>04</b>
            <p>Привлечение опытных специалистов (зарубежные специалисты);
            </p>
          </li>
          <li className='no'>
            <b>05</b>
            <p>Разработка модуля</p>
          </li>
          <li className='no'>
            <b>06</b>
            <p>Освещение  проекта с помощью СМИ</p>
          </li>
          <li className='no'>
            <b>07</b>
            <p>
              Проведение отбора участников
            </p>
          </li>
          <li className='no'>
            <b>08</b>
            <p>Организация проекта в 4 этапа</p>
          </li>
          <li className='no'>
            <b>09</b>
            <p>Организация форума и церемония награждения победителей</p>
          </li>
          <li className='on'>
            <b>10</b>
            <p>Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Zadachi