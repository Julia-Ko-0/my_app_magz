import a from './maim.module.css'
function Text(){
    return(
        <div class={a.div_text}>
            <h1>Почему выбирают нас</h1>
            <div class ={a.text}>
                <div>
                    <h2>скидки постоянным клиентам от 5%
                    </h2>
                </div>
                <div>
                    <h2>Предлагаем самые выгодные цены</h2>
                </div>
                <div>
                    <h2>Наши покупатели всегда остаются довольны</h2>
                </div>
                <div>
                    <h2>Ширикий ассортимент товаров для всей семьи</h2>
                </div>
                   
            </div>
        </div>
    )
}
export{Text}
