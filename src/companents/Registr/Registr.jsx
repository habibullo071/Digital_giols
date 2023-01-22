import React from 'react'
import './Registr.css'
function Registr() {
  return (
    <div id='Registr' className='Registr'>
          <p>Регистрация</p>
        <div className="reg">
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='Дата рождения'/>
          <input type="text" placeholder='Адрес'/>
          <input type="text" placeholder='Фамилия'/>
          <input type="text" placeholder='Почта'/>
          <input type="text" placeholder='Телефон'/>
        </div>
        <a href=""><button>Отправить</button></a>
    </div>
  )
}

export default Registr