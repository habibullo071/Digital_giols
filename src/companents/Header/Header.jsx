import React from 'react'
import './Header.css'
import logo from '../../img/img1.png'
import User from '../../img/img2.png'
function Header() {
    return (
        <div className='Header'>
            <div className="Head">
                <div className="nav__left">
                    <a href=""><img src={logo} alt="" /></a>
                    <p>Girls in Digital </p>
                </div>
                <div className="nav__right">
                    <ul className='nav__ul'>
                        <li>
                            <a href="#Proekt"><b>О Проекте</b></a>
                        </li>
                        <li>
                            <a href="#Naprav"><b>Направления</b></a>
                        </li>
                        <li>
                            <a href="#Zadachi"><b>Задачи</b></a>
                        </li>
                        <li>
                            <a href="#Result"><b>Результаты</b></a>
                        </li>
                        <li>
                            <a href="#Kontakt"><b>Контакты</b></a>
                        </li>
                    </ul>
                    <select name="" id="" className='none'>
                        <option value=""><a href="#Naprav"><b>Направления</b> </a></option>
                        <option value=""><a href="#Zadachi">Задачи</a></option>
                        <option value=""><a href="#Result">Результаты</a></option>
                        <option value=""><a href="#Kontakt">Контакты</a></option>
                    </select>
                    <select name="" id="" className='select'>
                        <option value="">Уз</option>
                        <option value="">Ру</option>
                    </select>
                    <a href="#Registr"><button className='btn'>Регистрация</button></a>
                </div>
                <div className="header">
                    <div className="header__left">
                        <div className="header__text">
                            <b>“Girls in digital”</b>
                            <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвали фицированных кадров</p>
                            <a href=""><button>Подробнее</button></a>
                        </div>
                    </div>
                    <div className="header__right">
                        <img src={User} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header