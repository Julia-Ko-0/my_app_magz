import a from './maim.module.css'
import {Mas} from './mas.jsx'
import {Pr_ys_kk} from './profile.jsx'
console.log(Mas[1].price)
function Ys_kyp(){
    return(
    <div class={a.div}>
        <div>
            <h1>Успейте купить!</h1>
            <h1>Акции</h1>
        </div>
        <div class={a.tovr}>
            {
              Mas.map(m=>(
                <Pr_ys_kk skl={m.imgs} price={m.price} pr_price={m.pr_price}
                otdel={m.otdel}
                ocenk={m.ocenk}/>
              ))
            }
        </div>
    </div>
    )
}
// {for(let i = 0;i<mas.length ; i++){
//     console.log(mas[i].price)
// }}
export{Ys_kyp}