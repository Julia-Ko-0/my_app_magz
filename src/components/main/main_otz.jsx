import a from './main_otz.module.css'
import { Mas } from '../katalog/mas.jsx'
import {Pr_ys_kk} from './profile.jsx'
// import { CrElOtz } from '../katalog/tovar.jsx' 
console.log(Mas[1].price)
function Otz_kl(){
    function CrElOtz(props){
        let b= []
        for(let i = 0;i<props.ocenk;i++){
            b.push(Cr_zv())
        }
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
        return(
            <div class={a.akk_otzv}>
                <div class={a.img_akk}>
                <img   width='573' src={props.imgs} alt="" />
                </div> 
                <div class={a.akk_otzv_inf}>
                    <div>
                    {b}
                    </div>
                 
                    {props.text.length<=50 &&
                    <h2 class={a.text}>{props.text.slice(0,50)}</h2>}
                    {props.text.length>50 &&
                         <h2 class={a.text}>{props.text.slice(0,50)+'.....'}</h2>
                    }
                    <div class={a.d_name_date}>
                    <h1>{props.name}</h1>
                    <h1 class={a.date}>{props.date}</h1>
                    </div>
                      
                </div>
                
            </div>
        )
      
    }
    return(
        <div>
            <h1 class={a.otz_nach_pok}>Отзывы наших покупателей</h1>
            <div class={a.div_otz}>
            <button id='b_l_o' class={a.b_l} onClick={()=>{
                
                let d = document.getElementById('otzv')
                console.log(d.scrollLeft)
                d.scrollLeft -= 300
                if(d.scrollLeft == 0){
                  let b = document.getElementById("b_l_o")
                  b.style.display='none'
                }
                else{

                }
                   }}> 
                  <svg class={a.svg_str} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
      
                  <path d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E"/>
                  </svg>
              </button>
             <div class={a.div_} id='otzv'>
              {Mas.map(m=>(
                <CrElOtz name={m.otzovs[0].name}  date={m.otzovs[0].date} ocenk={m.otzovs[0].zv} imgs={m.otzovs[0].img} text={m.otzovs[0].text}/>
              ))}
       
            </div>
             <button onClick={()=>{
                
          let d = document.getElementById('otzv')
          console.log(d.scrollLeft)
          d.scrollLeft += 300
          if(d.scrollLeft >0){
            let b = document.getElementById("b_l_o")
            b.style.display='flex'
          }
             }}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">

            <path d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E"/>
            </svg>
        </button>
        </div>
        <div class={a.div_btn_El}>
        <button class={a.btn_dob_otz}>Добавить отзыв</button>
        <div class={a.cr1}> <img class={a.cr1} src="./imgs/Ellipse 2.png" alt="" /></div>
        
        </div>
       </div>
        
   
    )
}
// {for(let i = 0;i<mas.length ; i++){
//     console.log(mas[i].price)
// }}
export{Otz_kl}