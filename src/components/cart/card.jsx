import a from './card.module.css' 
function CrCard(){
    return(
        <div class={a.div}>
             <selection class={a.otdel}>
                <button class={a.bnt_nazad}>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path class={a.strelk} d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM30 21.5L13 21.5L13 22.5L30 22.5L30 21.5Z" fill="#FFFDF5"/>
                    </svg>
                </button>
                <h2>Главная/Женщинам/Блузки и рубашки </h2>

               
             </selection>
             <selection class={a.otdel_2}>
                <h1>Блузка женская </h1>
                <h2> art 9021848</h2>
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
                    <h3>50 rub</h3>
                    <h2>color</h2>

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

                <section>

                </section>
             
        </div>
    )
}
export{CrCard}