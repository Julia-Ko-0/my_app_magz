import a from './maim.module.css'
import {Mas} from './mas.jsx'
import {Pr_ys_kk} from './profile.jsx'
console.log(Mas[1].price)
function Ys_kyp(){
  function ScrolsB(){
    let d = document.getElementById('tovrs')
    console.log(d.scrollLeft)
    d.scrollLeft -= 300
    if(d.scrollLeft == 0){
      let b = document.getElementById("b_l")
      b.style.display='none'
    }
  }
  function sCROLb_R(){

          let d = document.getElementById('tovrs')
          console.log(d.scrollLeft)
          d.scrollLeft += 300
          if(d.scrollLeft >0){
            let b = document.getElementById("b_l")
            b.style.display='flex'
          }
      
  }
    return(
    <div class={a.div_}>
        <div class={a.ysp_kyp_h1}>
            <h1 class={a.ysKyp}>Успейте купить!</h1>
            <h1 class={a.akcii}>Акции</h1>
        </div>
        <div class={a.div_tv_btn}>
        <button id="b_l" class={a.btn_tv_l} onClick={ScrolsB}>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="8" viewBox="0 0 47 8" fill="none">
        <path d="M46.3536 4.35355C46.5488 4.15829 46.5488 3.84171 46.3536 3.64645L43.1716 0.464466C42.9763 0.269204 42.6597 0.269204 42.4645 0.464466C42.2692 0.659728 42.2692 0.976311 42.4645 1.17157L45.2929 4L42.4645 6.82843C42.2692 7.02369 42.2692 7.34027 42.4645 7.53553C42.6597 7.7308 42.9763 7.7308 43.1716 7.53553L46.3536 4.35355ZM0 4.5H46V3.5H0V4.5Z" fill="#514A7E"/>
        </svg>
        </button>
        <section id='tovrs'class={a.tovr}>
            {
              Mas.map(m=>(
                <Pr_ys_kk skl={m.imgs} price={m.price} pr_price={m.pr_price}
                otdel={m.otdel}
                ocenk={m.ocenk}/>
              ))
            }
      
        </section>
        <button id="b_r" class={a.btn_tv} onClick={sCROLb_R}>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="8" viewBox="0 0 47 8" fill="none">
        <path d="M46.3536 4.35355C46.5488 4.15829 46.5488 3.84171 46.3536 3.64645L43.1716 0.464466C42.9763 0.269204 42.6597 0.269204 42.4645 0.464466C42.2692 0.659728 42.2692 0.976311 42.4645 1.17157L45.2929 4L42.4645 6.82843C42.2692 7.02369 42.2692 7.34027 42.4645 7.53553C42.6597 7.7308 42.9763 7.7308 43.1716 7.53553L46.3536 4.35355ZM0 4.5H46V3.5H0V4.5Z" fill="#514A7E"/>
        </svg>
        </button>
        </div>
        
    </div>
    )
}
// {for(let i = 0;i<mas.length ; i++){
//     console.log(mas[i].price)
// }}
export{Ys_kyp}