import { NavLink } from 'react-router-dom'
import a from './poisk.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { CrWomen,CrMen,CrKids,CrObuv,CrToys,CrAcses,BigSize,CrDop,CrSale } from './crPoisk';

function CrPoiskKatal(){
    return(
        <div class={a.div}>
            <div class={a.blck}>
            {/* {'Товар/?page='+m.articul} */}
            <img class={a.img_} src="./imgs/лого неон 2.png" alt="" />
                <NavLink to='Женщинам'>Женщинам</NavLink>
                <NavLink to='Мужчинам'>Мужчинам</NavLink>
                <NavLink to='Детям'>Детям</NavLink>
                <NavLink to='Обувь'>Обувь</NavLink>
                <NavLink to='Игрушки'>Игрушки</NavLink>
                <NavLink to='Аксессуары'>Аксессуары</NavLink>
                <NavLink to='Большие размеры'>Большие размеры</NavLink>
                <NavLink to='Дополнитеьно'>Дополнитеьно</NavLink>
                <NavLink to='Акции'>Акции</NavLink>
                
            </div>
            <div class={a.blck}>
            <Routes>
            <Route path='Женщинам' element={<CrWomen/>}/>
            <Route path='Мужчинам' element={<CrMen/>}/>
            <Route path='Детям' element={<CrKids/>}/>
            <Route path='Обувь' element={<CrObuv/>}/>
            <Route path='Игрушки' element={<CrToys/>}/>
            <Route path='Аксессуары' element={<CrAcses/>}/>
            <Route path='Большие размеры' element={<BigSize/>}/>
            <Route path='Дополнитеьно' element={<CrDop/>}/>
            <Route path='Акции' element={<CrSale/>}/>

          </Routes>
            </div>
           
        </div>
    )
}
export{CrPoiskKatal}