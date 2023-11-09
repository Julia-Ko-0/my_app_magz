import a from './tovar.module.css' 
function CrTovar(props){
    return(
        <div class={a.div}>
             
             <selection class={a.otdel_2}>
                <h1>{props.name}</h1>
                <h2> art{props.art}</h2>
             </selection>
             <selection class={a.tovar}>
                    <div class={a.img_tovar}>
                    <img  class={a.btn_sl_img} width='573' src="./imgs/Rectangle 52 (1).png" alt="" />
                    <button class={a.btn_img} >
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 85 47" fill="none">
  <rect  fill="#FFFDF5"/>
  <path d="M66.3536 24.3536C66.5488 24.1583 66.5488 23.8417 66.3536 23.6464L63.1716 20.4645C62.9763 20.2692 62.6597 20.2692 62.4645 20.4645C62.2692 20.6597 62.2692 20.9763 62.4645 21.1716L65.2929 24L62.4645 26.8284C62.2692 27.0237 62.2692 27.3403 62.4645 27.5355C62.6597 27.7308 62.9763 27.7308 63.1716 27.5355L66.3536 24.3536ZM20 24.5H66V23.5H20V24.5Z" fill="#514A7E"/>
</svg>
                        </button>
                    </div>
                <div>
                    <h3>{props.price}</h3>
                    <h2>{props.color}</h2>

                    <h2>Razmer</h2>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <a>Тфблица размеров</a>
                    <div>
                    <button>В корзину</button>
                    </div>
                <div></div>
                <div>
                    <a>Смотреть все отзовы</a>
                    <a>Добавить отзыв</a>
                </div>
                <h2>Описание</h2>
                <h1>длваопдокалокрплрв длваопмоав лдчаомдв ыпомдвыпо вджплмо</h1>
                </div>
                </selection>
                <h1>Отзывы о товаре</h1>
                <section class={a.otz}>
                    <div class={a.akk_otzv}>
                    <img  class={a.img_akk} width='573' src="./imgs/Ellipse 8.png" alt="" />
                    <div class={a.akk_otzv_inf}>
                        <h1>Кристина Василюк</h1>
                        <h2>djkhndlk y dhgfd fg xxjfgrs jksdfghkj ksjghk </h2>
                        </div>
                    </div>
                    <div class={a.akk_otzv}>
                    <img  class={a.img_akk} width='573' src="./imgs/Ellipse 8.png" alt="" />
                        <div class={a.akk_otzv_inf}>
                            <h1>Анна Котлова</h1>
                            <h2>djkhndlk y dhgfd fg xxjfgrs jksdfghkj ksjghk </h2>
                        </div>
                    </div>
                </section>
             
        </div>
    )
}
export{CrTovar}