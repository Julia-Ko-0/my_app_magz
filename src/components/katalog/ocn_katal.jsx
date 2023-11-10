import a from './ocn.module.css' 
import { CrKat_ } from './katalog'
import { CrTovar } from './tovar'
import { NavLink } from 'react-router-dom'
function CrKatalog(props){
    let url = new URLSearchParams(window.location.search).get("glOt")
    let url2 = new URLSearchParams(window.location.search).get("ot")
    console.log(url)
    return(
        <div class={a.div}>
            <selection class={a.otdel}>
                <NavLink to='/Поиск'>
                <button class={a.bnt_nazad}>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path class={a.strelk} d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM30 21.5L13 21.5L13 22.5L30 22.5L30 21.5Z" fill="#FFFDF5"/>
                    </svg>
                </button></NavLink>
                <h2>{props.slk}{url}/{url2}</h2>
                </selection>
                <CrKat_/>
                {/* <CrTovar/> */}
        </div>
    )
}
export{CrKatalog}