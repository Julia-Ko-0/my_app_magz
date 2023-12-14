import React from 'react';
import a from './favor.module.css'
import { MasFavourites } from './favourites_mas'
import { Fav } from './profile2'


function PrFavourites(){
    return(
        <div class={a.obf_div}>

            <div> 
            <h1 class = {a.i}>Избранное</h1>
            </div>

            <div> 
            <section class={a.tovf}>
            {
              MasFavourites.map(m=>(
                <Fav img={m.img} 
                price={m.price} 
                category={m.category}
                ozenka={m.ozenka}/>
              ))
            }
            </section>
            </div>

            <div>
            <img class={a.btnkrup} src="./img/наверх.svg"/>
            </div>

            <div>
            <button class={a.btnkrvnz}><h3 class={a.e}>Ещё</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="24" viewBox="0 0 8 24" fill="none">
              <path id = "Arrow 8.1" d="M3.64645 23.3536C3.84171 23.5488 4.15829 23.5488 4.35355 23.3536L7.53553 20.1716C7.7308 19.9763 7.7308 19.6597 7.53553 19.4645C7.34027 19.2692 7.02369 19.2692 6.82843 19.4645L4 22.2929L1.17157 19.4645C0.976312 19.2692 0.659729 19.2692 0.464467 19.4645C0.269205 19.6597 0.269205 19.9763 0.464467 20.1716L3.64645 23.3536ZM3.5 2.18557e-08L3.5 23L4.5 23L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="#514A7E"/>
              </svg>
            </button>
            </div>

        </div>
      
    )
}

export{PrFavourites}