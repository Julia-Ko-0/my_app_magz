import a from './maim.module.css'
import { NavLink } from "react-router-dom"
function Top(){
    return(

            <div class={a.ddd}>
                <div class={a.ob1_div}>
                    <div class={a.dbr_lf}>
                        <div>

                        <img class={a.img_pr} src="./imgs/2023-10-30_11-08-47.png" alt="" />
                        
                        </div>
                        <div class={a.t_dobr_poz}>
                            <div class={a.t}><h1>Добро пожаловать<br></br>в <h3 class={a.coctel}> Cocteil</h3></h1></div>
                            <div class={a.t1}>
                                <h2>Экономим Ваше время! </h2>
                                <h2>Предлагаем лучшие цены! </h2>
                                <h2>Доставляем в кратчайшие сроки!</h2>
                            </div>
                           
                        </div>

                    </div>
                    <div class={a.dbr_pr}>
                    <img class={a.img_left}src="./imgs/rectangle-21.png"/>
                    </div>
                </div>
                <div class={a.btns}>
                <NavLink to='/Поиск'>
                    <button class={a.btnn}><h3 class={a.hhh}>Каталог</h3></button>
                    </NavLink>
                </div>
            </div>
           
    )
}


export{Top}