import React from 'react'
import img4 from '../../img/img4.png'
import img12 from '../../img/img12.png'

import './Proekt.css'
function Proekt() {
  return (
    <div id='Proekt' className='Proekt'>
      <h1>О проекте</h1>
      <ul className='lu'>
        <li className='lu__li'>
          <img src={img4} alt="" className='img4' />
          <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
        </li>
        <li className='li'>
          <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.
          </p>
          <img src={img12} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Proekt