 import a from './reg.module.css'
 function CrRegistr(){
    return(
<div class={a.div}>
       <h1>Регистрация</h1>
       <div>
        <div>
            <input>
            </input>
            <input></input>
            <input></input>
        </div>
        <div>
            <input>
            </input>
            <input></input>
            <input></input>
        </div>
        <div>
            <button class={a.btn_otpr}>Отправить<svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
<path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
</svg></button>
            <button>Войти в кабинет</button>
        </div>
       </div>
</div>
    )
 }
 export{CrRegistr}