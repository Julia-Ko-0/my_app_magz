import {Mas} from './mas.jsx'
import {Pr_ys_kk} from './profile.jsx' 
import { useState } from "react"


import a from './katalog.module.css' 

function CrKat_(props){

    let poisk = document.getElementById('poisk')
    poisk.style.display='flex'

  const [value, setValue] = useState('S 42');
  const [NewMas,SetCount]=useState(Mas)
  function chengeValue(event) {
    setValue(event.target.value);
    console.log(value)
    let NewApp
    if(value == 'S 42'){
       NewApp = NewMas.filter(a=>  a.size_s>0)
       SetCount(NewApp)
    }
    if(value == 'M 44'){
       NewApp = NewMas.filter(a=>  a.size_m>0)
       SetCount(NewApp)
    }
    if(value == 'L 45'){
       NewApp = NewMas.filter(a=>  a.size_l>0)
       SetCount(NewApp)
    }
   
        // SetCount(NewApp)
        console.log(NewApp)
 }
 const [valueC, setValueC] = useState('red');
 function chengeValue_C(event) {
   setValueC(event.target.value);
}
  function DbDiv_Size(){
          
    let svg_s = document.getElementById('svg_s')
    let div_size = document.getElementById('div_size')
    if(svg_s.style.transform=='rotate(0deg)' || svg_s.style.transform==''){
      svg_s.style.transform ='rotate(180deg)'
      div_size.style.display='grid'
    }
    else{
      svg_s.style.transform='rotate(0deg)'
      div_size.style.display='none'
    }
    // svg_s.style.transform='rotate(180deg)';
}
function DbDiv_Color(){
          
  let svg_s = document.getElementById('svg_c')

  let div_size = document.getElementById('div_color')
  if(svg_s.style.transform=='rotate(0deg)' || svg_s.style.transform==''){
    svg_s.style.transform ='rotate(180deg)'
    div_size.style.display='grid'
  }
  else{
    svg_s.style.transform='rotate(0deg)'
    div_size.style.display='none'
  }
  // svg_s.style.transform='rotate(180deg)';
}
function DbDiv_Price(){
  let svg_p = document.getElementById('svg_p')

  let div_size = document.getElementById('div_price')
  if(svg_p.style.transform=='rotate(0deg)' || svg_p.style.transform==''){
    svg_p.style.transform ='rotate(180deg)'
    div_size.style.display='grid'
  }
  else{
    svg_p.style.transform='rotate(0deg)'
    div_size.style.display='none'
  }
}
function CrPreceValue(){
    let price = document.getElementById('price')
    let price_value = document.getElementById('price_value')
    price_value.innerHTML = price.value
}
    return(
        <div class={a.div}>
            <div class={a.sort}>
              <div class={a.sort_}>
              <h2>Сортиповать по: </h2>
                <button class={a.btn_sort}>Популярности</button>
                <button class={a.btn_sort}>Рейтингу</button>
                <button class={a.btn_sort}> Цене</button>
              </div>
              
                <img class={a.img_pr} src='/imgs/Ellipse 2.png' alt="" />
            </div>
           
            

          <div class={a.tov_vs}>
            <div class={a.filtr}>
                <section>
                <h2 onClick={DbDiv_Price}>Цена <svg  id ='svg_p'xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M2 1.04907e-06L7 5L12 1.74846e-07L14 1L7 8L-6.11959e-07 1L2 1.04907e-06Z" fill="#514A7E"/>
                  </svg></h2>
                  <div id='div_price' class={a.price_div}>
                  <h4 id='price_value'>0</h4>
                  <input id ='price'type="range" min="0" max='10000' step="1" onInput={CrPreceValue} ></input>
                
                  </div>
                </section>
                <section >
                <h2 onClick={DbDiv_Size}>Размер <svg id ='svg_s'  xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M2 1.04907e-06L7 5L12 1.74846e-07L14 1L7 8L-6.11959e-07 1L2 1.04907e-06Z" fill="#514A7E"/>
                  </svg></h2>
                  <div id = 'div_size' class={a.size_div}>
                  <input id='radio-1' checked={value == 'S 42' ? true : false} onChange={chengeValue} value='S 42'class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-1">S 42</label>

                            <input id='radio-2' value='M 44' checked={value == 'M 44' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/> 
                            <label for="radio-2">M 44</label>

                            <input id='radio-3' value='L 45' checked={value == 'L 45' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/>
                            <label for="radio-3">L 45</label>

                            <input id='radio-4' value='XL 46' checked={value == 'XL 46' ? true : false} onChange={chengeValue} class={a.cek} type="radio" name="raz"/>
                            <label for="radio-4">XL 46</label>

                  </div>
                </section>
                <section>
                    <h2 onClick={DbDiv_Color}>Цвет <svg id ='svg_c' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M2 1.04907e-06L7 5L12 1.74846e-07L14 1L7 8L-6.11959e-07 1L2 1.04907e-06Z" fill="#514A7E"/>
                  </svg></h2>
                  <div id = 'div_color' class={a.color_div}>
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
                </section>
                <button>Сбросить</button>
            </div>
           
            <selection class={a.tovars}>
            {
              NewMas.map(m=>(
                <Pr_ys_kk hrf={'/Каталог/Товар/?glOt=Женщинам&ot=Платья&page='+m.articul} gl_otd = {m.gl_otd}pr={props.src}skl={m.imgs} price={m.price} pr_price={m.pr_price}
                otdel={m.otdel}
                ocenk={m.ocenk}
                name={m.name}/>
              ))
            }
              
             </selection>
         
        
          
          </div>
        </div>
    )
}
export{CrKat_}