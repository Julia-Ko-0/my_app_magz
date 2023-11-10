import a from './poisk.module.css'
import { NavLink } from 'react-router-dom'


function CrWomen(){
    return(
        <div class={a.blck1}>
             <NavLink to='/Каталог/?glOt=Женщинам&ot=Майки'>Майки</NavLink>
                <NavLink to='Костюмы'>Костюмы</NavLink>
                <NavLink to='Брюки'>Брюки</NavLink>
                <NavLink to='Обувь'>Обувь</NavLink>
                <NavLink to='Игрушки'>Игрушки</NavLink>
                <NavLink to='Аксессуары'>Аксессуары</NavLink>
                <NavLink to='Большие размеры'>Большие размеры</NavLink>
                <NavLink to='Дополнитеьно'>Дополнитеьно</NavLink>
                <NavLink to='Акции'>Акции</NavLink>
                

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