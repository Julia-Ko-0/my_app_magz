import { NavLink, matchPath } from 'react-router-dom'
import {Mas} from './mas.jsx'
import { MasCard } from '../card/cardMas.jsx'
import { useState } from "react"
import a from './tovar.module.css' 
import React from 'react'

function DobVCarz(el1,el2,el3,el4,el5,el6,el7){
    console.log(el1,el5)
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
 
    const [value, setValue] = useState('S 42');
    const [valueC, setValueC] = useState('red');
    function chengeValue(event) {
        setValue(event.target.value);
     }
  let url = new URLSearchParams(window.location.search).get("page")
  let url1 = new URLSearchParams(window.location.search).get("ot")
  let url2 = new URLSearchParams(window.location.search).get("glOt")
    console.log(url)
    let b= []
    function Cr_zv(){
        return( <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="clarity:favorite-solid" clip-path="url(#clip0_81_2891)">
        <g id="Group 39">
        <path id="Vector" d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_81_2891">
        <rect width="10" height="10" fill="white"/>
        </clipPath>
        </defs>
        </svg>)
        
        
            }
    for(let i = 0;i<Mas.length;i++){
        if(url == Mas[i].articul){
            for(let i = 0;i<Mas[i].ocenk;i++){
                b.push(Cr_zv())
            }

            function chengeValue_C(event) {
                setValueC(event.target.value);
             }
            console.log(Mas[i].otzovs[1].name)
            return(
                <div class={a.div}>
                    <div class={a.d_b_gl}>
                    <NavLink to={'/Каталог/?glOt='+url2+'&ot='+url1}>
                    <button class={a.btn_nazad}><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">

                    <path class={a.patt} d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM30 21.5L13 21.5L13 22.5L30 22.5L30 21.5Z" fill="#FFFDF5"/>
                    </svg></button></NavLink>
                     <h2>Главная/{Mas[i].gl_otd}/{Mas[i].otdel}</h2>
                    </div>
                 
                     <selection class={a.otdel_2}>
                        <h1>{Mas[i].name}</h1>
                        <h2> art {Mas[i].articul}</h2>
                     </selection>

                     <selection class={a.tovar}>
                        <div >
                            <div class={a.img_tovar}>
                            <img  class={a.btn_sl_img} width='573' src={Mas[i].imgs} alt="" />
                            <button class={a.btn_img} >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 85 47" fill="none">
                                <rect  fill="#FFFDF5"/>
                                <path d="M66.3536 24.3536C66.5488 24.1583 66.5488 23.8417 66.3536 23.6464L63.1716 20.4645C62.9763 20.2692 62.6597 20.2692 62.4645 20.4645C62.2692 20.6597 62.2692 20.9763 62.4645 21.1716L65.2929 24L62.4645 26.8284C62.2692 27.0237 62.2692 27.3403 62.4645 27.5355C62.6597 27.7308 62.9763 27.7308 63.1716 27.5355L66.3536 24.3536ZM20 24.5H66V23.5H20V24.5Z" fill="#514A7E"/>
                                </svg>
                                </button>
                            </div>
                            <div class={a.img_tovar2}>
                                <div class={a.d_img_tovar2}>
                                <img  class={a.sl_img2} width='573' src={Mas[i].imgs} alt="" />
                            <img  class={a.sl_img2} width='573' src={Mas[i].imgs} alt="" />
                            <img  class={a.sl_img2} width='573' src={Mas[i].imgs} alt="" />
                            <img  class={a.sl_img2} width='573' src={Mas[i].imgs} alt="" />
                            
                                </div>
                          <button>  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 85 47" fill="none">
                                <rect  fill="#FFFDF5"/>
                                <path d="M66.3536 24.3536C66.5488 24.1583 66.5488 23.8417 66.3536 23.6464L63.1716 20.4645C62.9763 20.2692 62.6597 20.2692 62.4645 20.4645C62.2692 20.6597 62.2692 20.9763 62.4645 21.1716L65.2929 24L62.4645 26.8284C62.2692 27.0237 62.2692 27.3403 62.4645 27.5355C62.6597 27.7308 62.9763 27.7308 63.1716 27.5355L66.3536 24.3536ZM20 24.5H66V23.5H20V24.5Z" fill="#514A7E"/>
                                </svg></button>
                            </div>
                          

                        </div>
                        <div class={a.d_opis}>
                            <h3>{Mas[i].price} руб</h3>
                            <h2>Цвета</h2>
                            <div class={a.color_div}>
                            <input  bec="Black" id='color-1' value='red' checked={valueC == 'red' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/> 
                            <label class={a.red }for="color-1"></label>

                            <input id='color-2' value='blue' checked={valueC == 'blue' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/> 
                            <label class={a.blue} for="color-2"></label>

                            <input  id='color-3' value='black' checked={valueC == 'black' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/>
                            <label class={a.black} for="color-3"></label>

                            <input  id='color-4' value='yellow' checked={valueC == 'yellow' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/>
                            <label class={a.yellow } for="color-4"></label>
                            
                            <input  id='color-5' value='grin' checked={valueC == 'grin' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/>
                            <label class={a.grin} for="color-5"></label>

                            <input  id='color-6' value='white' checked={valueC == 'white' ? true : false} onChange={chengeValue_C} class={a.cek} type="radio" name="raz1"/>
                            <label class={a.white} for="color-6"></label>
             
                            </div>
                           
        
                            <h2>Razmer</h2>
                            <div class={a.ceck}>
                            <input id='radio-1' checked={value == 'S 42' ? true : false} onChange={chengeValue} value='S 42'class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-1"> S <br></br>42</label>

                            <input id='radio-2' value='M 44' checked={value == 'M 44' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-2"> M <br></br>44</label>

                            <input id='radio-3' value='L 45' checked={value == 'L 45' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/>
                            <label for="radio-3"> L <br></br>45</label>

                            <input id='radio-4' value='XL 46' checked={value == 'XL 46 ' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/>
                            <label for="radio-4"> XL <br></br>46</label>

                            </div>
                            <h4 class={a.t_r}>Тaблица размеров</h4>
                            
                            <div>
                                    <button class={a.btn_Carz} onClick={()=>{
                                        DobVCarz(Mas[i].price,Mas[i].imgs,Mas[i].name,Mas[i].articul,Mas[i].color,value,1)
                                    }}>В корзину <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                    <path d="M11.8893 5.66669V4.0278C11.8893 3.51711 11.7887 3.01141 11.5933 2.53959C11.3979 2.06777 11.1114 1.63906 10.7503 1.27795C10.3892 0.916829 9.96047 0.630375 9.48865 0.43494C9.01682 0.239505 8.51113 0.138916 8.00043 0.138916C7.48974 0.138916 6.98404 0.239505 6.51222 0.43494C6.0404 0.630375 5.61169 0.916829 5.25057 1.27795C4.88946 1.63906 4.603 2.06777 4.40757 2.53959C4.21213 3.01141 4.11154 3.51711 4.11154 4.0278V7.91669C4.11154 8.06404 4.17008 8.20534 4.27426 8.30953C4.37845 8.41372 4.51976 8.47225 4.6671 8.47225C4.81444 8.47225 4.95575 8.41372 5.05994 8.30953C5.16412 8.20534 5.22266 8.06404 5.22266 7.91669V6.7778H9.6671V5.66669H5.22266V4.0278C5.22266 3.29109 5.51531 2.58455 6.03625 2.06362C6.55718 1.54269 7.26372 1.25003 8.00043 1.25003C8.73715 1.25003 9.44368 1.54269 9.96462 2.06362C10.4856 2.58455 10.7782 3.29109 10.7782 4.0278V7.88892C10.7782 8.03626 10.8367 8.17757 10.9409 8.28175C11.0451 8.38594 11.1864 8.44447 11.3338 8.44447C11.4811 8.44447 11.6224 8.38594 11.7266 8.28175C11.8308 8.17757 11.8893 8.03626 11.8893 7.88892V6.7778H14.6671V16.7778H1.33377V6.7778H3.00043V5.66669H0.222656V16.8278C0.222656 17.1092 0.334451 17.3791 0.533448 17.5781C0.732445 17.7771 1.00234 17.8889 1.28377 17.8889H14.7171C14.9985 17.8889 15.2684 17.7771 15.4674 17.5781C15.6664 17.3791 15.7782 17.1092 15.7782 16.8278V5.66669H11.8893Z" fill="#FFFDF5"/>
                                        </svg></button>
                                       
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                <path d="M18.7797 33.3308C18.5526 33.3301 18.3321 33.2542 18.1527 33.115C12.4383 28.675 8.50191 24.8517 5.74747 21.0797C2.23247 16.2594 1.4308 11.8092 3.36302 7.85222C4.74025 5.02583 8.69719 2.71333 13.3222 4.05972C15.5273 4.69667 17.4513 6.06263 18.7797 7.93444C20.1081 6.06263 22.0321 4.69667 24.2372 4.05972C28.8519 2.73388 32.8191 5.02583 34.1964 7.85222C36.1286 11.8092 35.3269 16.2594 31.8119 21.0797C29.0575 24.8517 25.1211 28.675 19.4066 33.115C19.2272 33.2542 19.0068 33.3301 18.7797 33.3308ZM10.6911 5.73499C9.59059 5.69216 8.49921 5.94985 7.5341 6.48039C6.56899 7.01093 5.76659 7.79429 5.21302 8.74638C3.61997 12.0147 4.33941 15.653 7.41247 19.8567C10.6783 24.0691 14.5025 27.8172 18.7797 30.9978C23.0562 27.8204 26.8804 24.0757 30.1469 19.8669C33.2303 15.653 33.9394 12.0147 32.3464 8.75666C31.3186 6.70111 28.2353 5.06694 24.8025 6.03305C23.7018 6.35834 22.6814 6.91048 21.8069 7.65393C20.9325 8.39738 20.2234 9.31568 19.7252 10.3497C19.6478 10.5382 19.5161 10.6995 19.3468 10.8129C19.1775 10.9264 18.9783 10.987 18.7746 10.987C18.5708 10.987 18.3716 10.9264 18.2023 10.8129C18.033 10.6995 17.9013 10.5382 17.8239 10.3497C17.3295 9.31309 16.6216 8.39265 15.7466 7.64874C14.8716 6.90482 13.8493 6.35423 12.7466 6.03305C12.0786 5.83901 11.3868 5.7387 10.6911 5.73499Z" fill="#514A7E"/>
                                </svg>
                            </div>
                        <div class={a.ocenk}>{b}</div>
                        <div class={a.d_t_r2}>
                            <h4 class={a.t_r2}>Смотреть все отзовы</h4>
                            <h4 class={a.t_r2}>Добавить отзыв</h4>
                        </div>
                        <h2 class={a.opis}>Описание</h2>
                        <h1 class={a.opis_d}>{Mas[i].opisan}</h1>
                        </div>
                </selection>

                        <h1 class={a.otz_h1}>Отзывы о товаре</h1>

                        <section class={a.otz}>
                           
                            {Mas[i].otzovs.map(m=>(
                                <CrElOtz name={m.name} text={m.text} imgs={m.img}/>
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
        <img  class={a.img_akk} width='573' src={props.imgs} alt="" />
            <div class={a.akk_otzv_inf}>
                <h1>{props.name}</h1>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
  
}
export{CrTovar,CrElOtz}