import a from './maim.module.css'
function Text(){
    return(
        <div class={a.div_text}>
            <h1 >Почему выбирают нас?</h1>
            <div class ={a.text}>
                <div class={a.text_vs}>
                    <div class={a.ttt}>
                        <h2>Скидки постоянным клиентам от 5%
                        </h2>
                        </div>
                    <img class={a.im_kr1} src="./imgs/Ellipse 4.svg" alt="" />
                    </div>
                <div  class={a.text_vs}>
                    <h2>Предлагаем самые выгодные цены</h2>
                </div>
                <div  class={a.text_vs}>
                    <h2>Наши покупатели всегда остаются довольны</h2>
                    <img class={a.im_kr2} src="./imgs/Ellipse 6.png" alt="" />
                   
                </div>
                <div class={a.text_vs}>
                    <h2>Ширикий ассортимент товаров для всей семьи</h2>
                </div>
                <div class={a.cr1}> <img class={a.cr1} src="./imgs/Ellipse 2.png" alt="" /></div>
                   
            </div>
            <div  class ={a.text1}>
                    <div class={a.d_kr}>
                 
                    <a href='#heder'> <img class={a.im_kr3} src="./imgs/наверх.png" alt="" /> </a>
                       
                    </div>
                    
                     
                    <div class={a.text_vs}>< h2 class={a.text_vs_h} >Возможность доставки в любой город cтраны</h2>
                        <img class={a.im_kr4} src="./imgs/Ellipse 4.svg" alt="" />
                    </div>

                              <div class={a.text_vs}><h2 class={a.tvs2}>Пункты выдачи заказов<br></br> рядом с домом</h2>
                        <img class={a.im_kr5} src="./imgs/Ellipse 4.svg" alt="" />
                        </div>
                       
               
                    <div class={a.d_kr}>
                       
                        <img class={a.im_kr3}  src="./imgs/Group 82.png " alt="" />
                       
                        
                    </div>

                
                    
            </div>
        </div>
    )
}
export{Text}
