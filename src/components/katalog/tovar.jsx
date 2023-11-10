import { NavLink, matchPath } from 'react-router-dom'
import {Mas} from './mas.jsx'
import { MasCard } from '../card/cardMas.jsx'
import a from './tovar.module.css' 
import React from 'react'

function DobVCarz(el1,el2,el3,el4,el5,el6,el7){
    console.timeLog(el1)
    MasCard.push({
        polz:1,
        img:el2,
        name:el3,
        articul:el4,
        color:el5,
        size:el6,
        kolv:el7,
        price:el1
    })
    
}
function CrTovar(){
  let url = new URLSearchParams(window.location.search).get("page")
  let url1 = new URLSearchParams(window.location.search).get("ot")
  let url2 = new URLSearchParams(window.location.search).get("glOt")
    console.log(url)
    for(let i = 0;i<Mas.length;i++){
        if(url == Mas[i].articul){
            console.log(Mas[i].otzovs[1].name)
            return(
                <div class={a.div}>
                    <NavLink to={'/Каталог/?glOt='+url2+'&ot='+url1}>
                    <button class={a.btn_nazad}><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">

<path d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM30 21.5L13 21.5L13 22.5L30 22.5L30 21.5Z" fill="#FFFDF5"/>
</svg></button></NavLink>
                     <h2>Главная/{Mas[i].gl_otd}/{Mas[i].otdel}</h2>
                     <selection class={a.otdel_2}>
                        <h1>{Mas[i].name}</h1>
                        <h2> art{Mas[i].articul}</h2>
                     </selection>
                     <selection class={a.tovar}>
                            <div class={a.img_tovar}>
                            <img  class={a.btn_sl_img} width='573' src={Mas[i].imgs} alt="" />
                            <button class={a.btn_img} >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 85 47" fill="none">
          <rect  fill="#FFFDF5"/>
          <path d="M66.3536 24.3536C66.5488 24.1583 66.5488 23.8417 66.3536 23.6464L63.1716 20.4645C62.9763 20.2692 62.6597 20.2692 62.4645 20.4645C62.2692 20.6597 62.2692 20.9763 62.4645 21.1716L65.2929 24L62.4645 26.8284C62.2692 27.0237 62.2692 27.3403 62.4645 27.5355C62.6597 27.7308 62.9763 27.7308 63.1716 27.5355L66.3536 24.3536ZM20 24.5H66V23.5H20V24.5Z" fill="#514A7E"/>
        </svg>
                                </button>
                            </div>
                        <div>
                            <h3>{Mas[i].price}</h3>
                            <h2>{Mas[i].color}</h2>
        
                            <h2>Razmer</h2>
                            <div class={a.ceck}>
                            <input id='radio-1' class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-1">S 42</label>

                            <input id='radio-2' class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-2">M 44</label>

                            <input id='radio-3' class={a.cek} type="radio" name="raz"/>
                            <label for="radio-3">L 45</label>

                            <input id='radio-4' class={a.cek} type="radio" name="raz"/>
                            <label for="radio-4">XL 46</label>

                            </div>
                            <a>Тaблица размеров</a>
                            <div>
                            <button onClick={()=>{
                                DobVCarz(Mas[i].price,Mas[i].imgs,Mas[i].name,Mas[i].articul,Mas[i].color,0,1)
                            }}>В корзину</button>
                            </div>
                        <div></div>
                        <div>
                            <a>Смотреть все отзовы</a>
                            <a>Добавить отзыв</a>
                        </div>
                        <h2>Описание</h2>
                        <h1>{Mas[i].opisan}</h1>
                        </div>
                        </selection>
                        <h1>Отзывы о товаре</h1>
                        <section class={a.otz}>
                           
                            {Mas[i].otzovs.map(m=>(
                                <CrElOtz name={m.name} text={m.text}/>
                            ))}
                        </section>
                     
                </div>
            )
        }
    }
 
    
}
function CrElOtz(props){
    return(
        <div class={a.akk_otzv}>
        <img  class={a.img_akk} width='573' src="./imgs/Ellipse 8.png" alt="" />
            <div class={a.akk_otzv_inf}>
                <h1>{props.name}</h1>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
  
}
export{CrTovar}