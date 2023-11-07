import {Mas} from './mas.jsx'
import {Pr_ys_kk} from './profile.jsx' 


import a from './katalog.module.css' 

function CrKat_(props){
    return(
        <div class={a.div}>
            <div class={a.sort}>
                <h2>Сортиповать по: </h2>
                <button class={a.btn_sort}>Популярности</button>
                <button class={a.btn_sort}>Рейтингу</button>
                <button class={a.btn_sort}> Цене</button>

            </div>

          <div class={a.tov_vs}>
            <div class={a.filtr}>
                <section>
                <h2>price</h2>
                </section>
                <section>
                <h2>size</h2>
                </section>
                <section>
                    <h2>color</h2>
                </section>
            </div>
          <selection class={a.tovars}>
            {
              Mas.map(m=>(
                <Pr_ys_kk skl={m.imgs} price={m.price} pr_price={m.pr_price}
                otdel={m.otdel}
                ocenk={m.ocenk}/>
              ))
            }
              
             </selection>
          </div>
        </div>
    )
}
export{CrKat_}