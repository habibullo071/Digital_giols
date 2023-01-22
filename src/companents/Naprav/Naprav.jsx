import React from 'react'
import './Naprav.css'
import img5 from '../../img/img5.png'
import img13 from '../../img/img13.png'
import img14 from '../../img/img14.png'
import d from '../../img/d.png'
import haykal from '../../img/haykal.png'
import moshina from '../../img/moshina.png'
import kal from '../../img/kal.png'
import mene from '../../img/mene.png'
function Naprav() {
  return (
    <div id='Naprav' className='Naprav'>
      <div className="nap">
        <p className='p'>Направлении</p>
        <p className='p__p'>Проект будет проводится по направлениям</p>
        <ul className='naprav__ul'>
          <li>
            <p>SMM и Таргетинг, копирайтинг</p>
            <img src={img5} alt="" />
          </li>
          <li>
            <p> 3D <br /> дизайн.</p>
            <img src={d} alt="" />
          </li>
          <li>
            <p>Графический <br /> дизайн</p>
            <img src={haykal} alt="" />
          </li>
          <li>
            <p><br /> Логистика</p>
            <img src={moshina} alt="" />
          </li>
          <li>
            <p>Программиро- <br /> вание</p>
            <img src={kal} alt="" />
          </li>
          <li>
            <p> Айти <br /> менеджмент</p>
            <img src={mene} alt="" />
          </li>
        </ul>
        <a href=""><button className='but'>Записаться</button></a>
      </div>
      <ul className='lu'>
        <li className='lu__li'>
          <img src={img13} alt="" className='img4' />
          <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
        </li>
        <li className='li'>
          <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте.
          </p>
          <img src={img14} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Naprav