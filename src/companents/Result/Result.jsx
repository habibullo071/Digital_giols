import React from 'react'
import './Result.css'
import img8 from '../../img/img8.png'
import img15 from '../../img/img15.png'
import img16 from '../../img/img16.png'
import img17 from '../../img/img18.png'
import img19 from '../../img/img19.png'
function Result() {
  return (
    <div id='Result' className='Result'>
      <div className="res">

        <p>Результаты</p>
        <div className="text">
          <b>Ожидаемый результат: Подготовка квалифи <br /> цированных и конкуренто  способных  кадров и разработка стартапп проектов и  среди девушек</b>
        </div>
        <ul className='resul'>
          <li>
            <img src={img8} alt="" />
            <p>
              Самореализация девушек <br /> в сфере IT
            </p>
          </li>
          <li>
            <img src={img15} alt="" />
            <p>
              Выбор профессии <br /> без квалификациии дипломов
            </p>
          </li>
          <li>
            <img src={img16} alt="" />
            <p>
              Возможность зарабатывать <br /> дистанционно (фриланс)
            </p>
          </li>
          <li>
            <img src={img17} alt="" />
            <p>
              Возможность начать <br /> свои социальные <br /> проекты в виде Старт <br /> апов
            </p>
          </li>
          <li>
            <img src={img19} alt="" />
            <p>
              Маркетинговые навыки
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Result