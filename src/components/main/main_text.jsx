import a from './maim.module.css'
function Text(){
    return(
        <div class={a.div}>
            <h1>Почему выбирают нас</h1>
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
                    <div></div>
                </div>
                <div class={a.text_vs}>
                    <h2>Ширикий ассортимент товаров для всей семьи</h2>
                </div>
                   
            </div>
        </div>
    )
}
export{Text}
