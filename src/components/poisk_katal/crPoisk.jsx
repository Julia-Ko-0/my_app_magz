import a from './poisk.module.css'
import { NavLink } from 'react-router-dom'


function CrWomen(){
    return(
        <div class={a.blck1}>
             <NavLink to='/Каталог/?glOt=Женщинам&ot=Майки'>Майки</NavLink>
             <NavLink to='/Каталог/?glOt=Женщинам&ot=Блузки'>Блузки</NavLink>
             <NavLink to='/Каталог/?glOt=Женщинам&ot=Платья'>Платья</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Костюмы'>Костюмы</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Брюки'>Брюки</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Обувь'>Обувь</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Игрушки'>Игрушки</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Аксессуары'>Аксессуары</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Большие размеры'>Большие размеры</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Дополнитеьно'>Дополнитеьно</NavLink>
                <NavLink to='/Каталог/?glOt=Женщинам&ot=Акции'>Акции</NavLink>
                

        </div>

    )
}

function CrMen(){
    return(
        <div class={a.blck1}>
             <NavLink to='Женщинам'>Женщинам</NavLink>
                <NavLink to='Аксессуары'>Аксессуары</NavLink>
                <NavLink to='Большие размеры'>Большие размеры</NavLink>
                <NavLink to='Дополнитеьно'>Дополнитеьно</NavLink>
                <NavLink to='Акции'>Акции</NavLink>

        </div>
    )
}
export{CrWomen,CrMen}