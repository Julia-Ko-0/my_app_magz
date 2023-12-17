import React from 'react';
import { NavLink } from 'react-router-dom'
import a from './favor.module.css'
import { MasFavourites } from './favourites_mas'
import { Fav } from './profile2'


function Cr_zv(){
  return( <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="clarity:favorite-solid" clip-path="url(#clip0_81_2891)">
  <g id="Group 39">
  <path id="Vector" d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E"/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0_81_2891">
  <rect width="10" height="10" fill="white"/>
  </clipPath>
  </defs>
  </svg>)
  
  
      }
function CrT(props){
  let b= []
  for(let i = 0;i<props.ocenk;i++){
    b.push(Cr_zv())
}
  return(
    <div class={a.div_tov}>
         <img class={a.img_pr} src={props.skl} alt="" />
         <div class={a.prace}>
            <div>
            <h3 >{props.price} руб</h3>
            
            <h1 class={a.price_pr}>{props.name }</h1>
            </div>
           <div class={a.svgs}>
           <svg class={a.svg1} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99977 18.0166C9.87702 18.0162 9.75785 17.9752 9.66088 17.8999C6.57199 15.4999 4.44421 13.4333 2.95532 11.3944C1.05532 8.78883 0.621986 6.38328 1.66643 4.24439C2.41087 2.71661 4.54976 1.46661 7.04976 2.19439C8.24173 2.53869 9.2817 3.27705 9.99977 4.28883C10.7178 3.27705 11.7578 2.53869 12.9498 2.19439C15.4442 1.47772 17.5887 2.71661 18.3331 4.24439C19.3775 6.38328 18.9442 8.78883 17.0442 11.3944C15.5553 13.4333 13.4275 15.4999 10.3387 17.8999C10.2417 17.9752 10.1225 18.0162 9.99977 18.0166ZM5.62754 3.09994C5.03268 3.07679 4.44275 3.21608 3.92107 3.50286C3.39938 3.78964 2.96565 4.21308 2.66643 4.72772C1.80532 6.49439 2.19421 8.46105 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7555C12.3114 15.038 14.3785 13.0139 16.1442 10.7388C17.8109 8.46105 18.1942 6.49439 17.3331 4.73328C16.7775 3.62217 15.1109 2.73883 13.2553 3.26105C12.6603 3.43689 12.1088 3.73534 11.6361 4.13721C11.1634 4.53907 10.7801 5.03545 10.5109 5.59439C10.469 5.69628 10.3978 5.78343 10.3063 5.84477C10.2148 5.9061 10.1071 5.93885 9.99699 5.93885C9.88683 5.93885 9.77916 5.9061 9.68766 5.84477C9.59616 5.78343 9.52495 5.69628 9.4831 5.59439C9.21586 5.03405 8.83322 4.53652 8.36026 4.1344C7.88729 3.73228 7.33468 3.43467 6.73865 3.26105C6.37753 3.15617 6.00359 3.10195 5.62754 3.09994Z" fill="#121212"/>
        </svg>
       <svg class={a.svg2} id='b_carz'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13.8893 6.66669V5.0278C13.8893 4.51711 13.7887 4.01141 13.5933 3.53959C13.3979 3.06777 13.1114 2.63906 12.7503 2.27795C12.3892 1.91683 11.9605 1.63037 11.4886 1.43494C11.0168 1.2395 10.5111 1.13892 10.0004 1.13892C9.48974 1.13892 8.98404 1.2395 8.51222 1.43494C8.0404 1.63037 7.61169 1.91683 7.25057 2.27795C6.88946 2.63906 6.603 3.06777 6.40757 3.53959C6.21213 4.01141 6.11154 4.51711 6.11154 5.0278V8.91669C6.11154 9.06404 6.17008 9.20534 6.27426 9.30953C6.37845 9.41372 6.51976 9.47225 6.6671 9.47225C6.81444 9.47225 6.95575 9.41372 7.05994 9.30953C7.16412 9.20534 7.22266 9.06404 7.22266 8.91669V7.7778H11.6671V6.66669H7.22266V5.0278C7.22266 4.29109 7.51531 3.58455 8.03625 3.06362C8.55718 2.54269 9.26372 2.25003 10.0004 2.25003C10.7371 2.25003 11.4437 2.54269 11.9646 3.06362C12.4856 3.58455 12.7782 4.29109 12.7782 5.0278V8.88892C12.7782 9.03626 12.8367 9.17757 12.9409 9.28175C13.0451 9.38594 13.1864 9.44447 13.3338 9.44447C13.4811 9.44447 13.6224 9.38594 13.7266 9.28175C13.8308 9.17757 13.8893 9.03626 13.8893 8.88892V7.7778H16.6671V17.7778H3.33377V7.7778H5.00043V6.66669H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66669H13.8893Z" fill="#121212"/>
        </svg>
           </div>
        
       
         </div>
         <div class={a.btn_ret}>
         
            <NavLink to={props.hrf}>
            <button class={a.btn_podrbn}>Подробнее   
                 <svg class={a.im_strSVG} width="26" height="4" viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  class={a.im_str} id="Arrow 9" d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                </svg>
            </button>   
            </NavLink>
       
                <div class={a.ap_zv}>
                {b}
                </div>
           
         </div>
        
        
    </div>
)

}
function PrFavourites(){
    return(
      <div class={a.div}>
          
          <div class={a.tov_vs}>
              <div class={a.filtr}>
                <div  class={a.d_b}>
          
                      <div class={a.d_s_i}>
                      <NavLink to='/Корзина' ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.8893 6.66667V5.02778C13.8893 4.51708 13.7887 4.01139 13.5933 3.53956C13.3979 3.06774 13.1114 2.63904 12.7503 2.27792C12.3892 1.9168 11.9605 1.63035 11.4886 1.43491C11.0168 1.23948 10.5111 1.13889 10.0004 1.13889C9.48974 1.13889 8.98404 1.23948 8.51222 1.43491C8.0404 1.63035 7.61169 1.9168 7.25057 2.27792C6.88946 2.63904 6.603 3.06774 6.40757 3.53956C6.21213 4.01139 6.11154 4.51708 6.11154 5.02778V8.91667C6.11154 9.06401 6.17008 9.20532 6.27426 9.3095C6.37845 9.41369 6.51976 9.47222 6.6671 9.47222C6.81444 9.47222 6.95575 9.41369 7.05994 9.3095C7.16412 9.20532 7.22266 9.06401 7.22266 8.91667V7.77778H11.6671V6.66667H7.22266V5.02778C7.22266 4.29107 7.51531 3.58453 8.03625 3.06359C8.55718 2.54266 9.26372 2.25 10.0004 2.25C10.7371 2.25 11.4437 2.54266 11.9646 3.06359C12.4856 3.58453 12.7782 4.29107 12.7782 5.02778V8.88889C12.7782 9.03623 12.8367 9.17754 12.9409 9.28173C13.0451 9.38591 13.1864 9.44444 13.3338 9.44444C13.4811 9.44444 13.6224 9.38591 13.7266 9.28173C13.8308 9.17754 13.8893 9.03623 13.8893 8.88889V7.77778H16.6671V17.7778H3.33377V7.77778H5.00043V6.66667H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66667H13.8893Z" fill="#7D7D7D"/>
                            </svg>Корзина<div class='polos'></div>
                        </NavLink>
                      </div>
                     
                        
                        <NavLink to="/Избранное">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.99977 18.0167C9.87702 18.0163 9.75785 17.9753 9.66088 17.9C6.57199 15.5 4.44421 13.4333 2.95532 11.3944C1.05532 8.78889 0.621986 6.38334 1.66643 4.24445C2.41087 2.71667 4.54976 1.46667 7.04976 2.19445C8.24173 2.53875 9.2817 3.2771 9.99977 4.28889C10.7178 3.2771 11.7578 2.53875 12.9498 2.19445C15.4442 1.47778 17.5887 2.71667 18.3331 4.24445C19.3775 6.38334 18.9442 8.78889 17.0442 11.3944C15.5553 13.4333 13.4275 15.5 10.3387 17.9C10.2417 17.9753 10.1225 18.0163 9.99977 18.0167ZM5.62754 3.1C5.03268 3.07685 4.44275 3.21614 3.92107 3.50292C3.39938 3.7897 2.96565 4.21313 2.66643 4.72778C1.80532 6.49445 2.19421 8.46111 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7556C12.3114 15.038 14.3785 13.0139 16.1442 10.7389C17.8109 8.46111 18.1942 6.49445 17.3331 4.73334C16.7775 3.62222 15.1109 2.73889 13.2553 3.26111C12.6603 3.43695 12.1088 3.7354 11.6361 4.13727C11.1634 4.53913 10.7801 5.03551 10.5109 5.59445C10.469 5.69634 10.3978 5.78349 10.3063 5.84483C10.2148 5.90616 10.1071 5.93891 9.99699 5.93891C9.88683 5.93891 9.77916 5.90616 9.68766 5.84483C9.59616 5.78349 9.52495 5.69634 9.4831 5.59445C9.21586 5.03411 8.83322 4.53657 8.36026 4.13446C7.88729 3.73234 7.33468 3.43472 6.73865 3.26111C6.37753 3.15623 6.00359 3.102 5.62754 3.1Z" fill="#7D7D7D"/>
                        </svg>Избранное
                        </NavLink> 
                        <NavLink to='/Просмотренные'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.6783 9.73887C16.8061 6.27776 13.5227 4.18332 9.88939 4.18332C6.25605 4.18332 2.96717 6.27776 1.11161 9.73887L0.956055 9.99999L1.1005 10.2667C2.97272 13.7278 6.25605 15.8222 9.88939 15.8222C13.5227 15.8222 16.8116 13.7555 18.6783 10.2667L18.8227 9.99999L18.6783 9.73887ZM9.88939 14.6833C6.76161 14.6833 3.88939 12.9389 2.22272 9.99999C3.88939 7.0611 6.76161 5.31665 9.88939 5.31665C13.0172 5.31665 15.8561 7.06665 17.5505 9.99999C15.8561 12.9389 13.0116 14.6833 9.88939 14.6833Z" fill="#7D7D7D"/>
                                    <path d="M10.0499 6.20556C9.29663 6.21106 8.56189 6.43966 7.93847 6.86249C7.31505 7.28533 6.83091 7.88343 6.54721 8.58125C6.26352 9.27907 6.19298 10.0453 6.34451 10.7832C6.49604 11.5211 6.86284 12.1975 7.39859 12.7271C7.93433 13.2566 8.61499 13.6155 9.3546 13.7585C10.0942 13.9014 10.8596 13.8219 11.554 13.5301C12.2485 13.2383 12.8409 12.7472 13.2565 12.1189C13.672 11.4906 13.8921 10.7533 13.8888 10C13.8866 9.49858 13.7855 9.00252 13.5913 8.54024C13.397 8.07796 13.1135 7.65856 12.7568 7.30606C12.4002 6.95357 11.9775 6.67492 11.513 6.48607C11.0485 6.29723 10.5513 6.2019 10.0499 6.20556ZM10.0499 12.7167C9.51782 12.7112 8.99922 12.5486 8.55924 12.2493C8.11926 11.9501 7.77751 11.5275 7.57692 11.0346C7.37633 10.5418 7.32584 10.0007 7.4318 9.4792C7.53775 8.95775 7.79542 8.47922 8.17244 8.10373C8.54947 7.72825 9.02904 7.47253 9.55092 7.36871C10.0728 7.26489 10.6137 7.31758 11.1058 7.52018C11.5978 7.72278 12.019 8.06625 12.3164 8.50745C12.6139 8.94865 12.7744 9.46791 12.7777 10C12.7792 10.3581 12.7095 10.713 12.5728 11.044C12.4361 11.375 12.2351 11.6755 11.9814 11.9282C11.7276 12.1809 11.4262 12.3808 11.0947 12.5161C10.7631 12.6514 10.408 12.7196 10.0499 12.7167Z" fill="#7D7D7D"/>
                                    </svg>Просмотренные
                                </NavLink>
                        <div >
                              

                                <NavLink to='/Бонусы'><div class='polos'></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.7223 2.26666C12.6501 2.26666 10.5557 3 10.5557 4.39444V5.27777C10.9278 5.29492 11.2987 5.33201 11.6668 5.38889V4.39444C11.6668 4.03333 12.8279 3.37222 14.7223 3.37222C16.6168 3.37222 17.7779 4.03888 17.7779 4.39444V10.1333C17.7779 10.4333 16.9668 10.9333 15.6112 11.0944V12.2056C17.3501 12.0278 18.889 11.3167 18.889 10.1222V4.39444C18.889 3 16.7946 2.26666 14.7223 2.26666Z" fill="#7D7D7D"/>
                                    <path d="M2.22244 10.1333V4.39444C2.22244 4.03333 3.38355 3.37222 5.278 3.37222C7.17244 3.37222 8.33355 4.03889 8.33355 4.39444V5.38889C8.70167 5.33201 9.07257 5.29492 9.44466 5.27777V4.39444C9.44466 2.99444 7.35022 2.26111 5.278 2.26111C3.20577 2.26111 1.11133 3 1.11133 4.39444V10.1333C1.11133 11.3333 2.65022 12.0389 4.38911 12.2222V11.1111C3.03355 10.9333 2.22244 10.4333 2.22244 10.1333Z" fill="#7D7D7D"/>
                                    <path d="M9.99989 6.02779C7.261 6.02779 5.19434 7.07223 5.19434 8.46112V15.3C5.19434 16.6889 7.261 17.7333 9.99989 17.7333C12.7388 17.7333 14.8054 16.6889 14.8054 15.3V8.46112C14.8054 7.07223 12.7388 6.02779 9.99989 6.02779ZM13.6943 10.2889C13.2221 10.8445 11.7943 11.4 9.99989 11.4C9.2493 11.4078 8.50132 11.3106 7.77767 11.1111V11.9222C8.5048 12.1006 9.25121 12.1883 9.99989 12.1833C11.2872 12.2356 12.5645 11.9359 13.6943 11.3167V13.05C13.2221 13.6056 11.7943 14.1611 9.99989 14.1611C9.24904 14.1671 8.50105 14.068 7.77767 13.8667V14.6778C8.5048 14.8562 9.25121 14.9439 9.99989 14.9389C11.2872 14.9911 12.5645 14.6915 13.6943 14.0722V15.3445C13.6943 15.8722 12.2221 16.6667 9.99989 16.6667C7.77767 16.6667 6.30545 15.8722 6.30545 15.3445V8.46112C6.30545 7.93334 7.77767 7.1389 9.99989 7.1389C12.2221 7.1389 13.6943 7.93334 13.6943 8.46112V10.2889Z" fill="#7D7D7D"/>
                                    </svg>
                                    Бонусы
                                </NavLink>
                                <NavLink to='/Личные_данные'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.0002 9.44444C10.7694 9.44444 11.5212 9.21636 12.1608 8.78904C12.8003 8.36172 13.2987 7.75436 13.5931 7.04376C13.8874 6.33316 13.9644 5.55123 13.8144 4.79686C13.6643 4.04249 13.2939 3.34956 12.7501 2.80569C12.2062 2.26182 11.5133 1.89144 10.7589 1.74138C10.0045 1.59133 9.22261 1.66834 8.512 1.96268C7.8014 2.25702 7.19404 2.75547 6.76672 3.395C6.33941 4.03452 6.11133 4.7864 6.11133 5.55555C6.11133 6.58694 6.52105 7.5761 7.25036 8.30541C7.97967 9.03472 8.96882 9.44444 10.0002 9.44444ZM10.0002 2.77777C10.5496 2.77777 11.0867 2.94068 11.5435 3.24591C12.0003 3.55114 12.3563 3.98497 12.5665 4.49254C12.7768 5.00011 12.8318 5.55863 12.7246 6.09746C12.6174 6.6363 12.3529 7.13125 11.9644 7.51973C11.5759 7.90821 11.081 8.17277 10.5421 8.27995C10.0033 8.38713 9.44478 8.33212 8.93721 8.12188C8.42963 7.91164 7.99581 7.5556 7.69058 7.0988C7.38535 6.64199 7.22244 6.10494 7.22244 5.55555C7.22244 4.81883 7.5151 4.1123 8.03603 3.59136C8.55697 3.07043 9.2635 2.77777 10.0002 2.77777Z" fill="#7D7D7D"/>
                                    <path d="M16.9273 13.5389C16.0364 12.5972 14.9628 11.8472 13.7721 11.3346C12.5814 10.822 11.2987 10.5576 10.0023 10.5576C8.70601 10.5576 7.42328 10.822 6.2326 11.3346C5.04192 11.8472 3.96829 12.5972 3.07735 13.5389C2.88419 13.7452 2.77691 14.0174 2.77735 14.3V17.2222C2.77735 17.5169 2.89441 17.7995 3.10278 18.0079C3.31116 18.2163 3.59377 18.3333 3.88846 18.3333H16.1107C16.4054 18.3333 16.688 18.2163 16.8964 18.0079C17.1047 17.7995 17.2218 17.5169 17.2218 17.2222V14.3C17.2237 14.0181 17.1185 13.7461 16.9273 13.5389ZM16.1107 17.2222H3.88846V14.2945C4.6758 13.4654 5.62362 12.8052 6.67421 12.3541C7.7248 11.9029 8.85621 11.6703 9.99957 11.6703C11.1429 11.6703 12.2743 11.9029 13.3249 12.3541C14.3755 12.8052 15.3233 13.4654 16.1107 14.2945V17.2222Z" fill="#7D7D7D"/>
                                    </svg>
                                    Личные данные
                                </NavLink>

                                <NavLink to='/История_покупок'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.1609 2.22223H4.34981C4.07474 2.22951 3.81366 2.34505 3.62329 2.54374C3.43293 2.74243 3.32866 3.00821 3.33315 3.28334V16.7167C3.32866 16.9918 3.43293 17.2576 3.62329 17.4563C3.81366 17.655 4.07474 17.7705 4.34981 17.7778H15.6498C15.9249 17.7705 16.186 17.655 16.3763 17.4563C16.5667 17.2576 16.671 16.9918 16.6665 16.7167V6.62223L12.1609 2.22223ZM11.9943 3.60556L15.3276 6.88334H11.9943V3.60556ZM4.44426 16.6667V3.33334H11.1109V7.77778H15.5554V16.6667H4.44426Z" fill="#7D7D7D"/>
                                    </svg>История покупок<div class='polos'></div>
                                </NavLink>

                                <NavLink to='/Вход'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.44434 2.22223H13.3332C13.6279 2.22223 13.9105 2.33929 14.1189 2.54767C14.3273 2.75604 14.4443 3.03866 14.4443 3.33334H4.44434V16.6667H13.3332V11.2222H14.4443V16.6667C14.4443 16.9614 14.3273 17.244 14.1189 17.4523C13.9105 17.6607 13.6279 17.7778 13.3332 17.7778H4.44434C4.14965 17.7778 3.86704 17.6607 3.65866 17.4523C3.45029 17.244 3.33323 16.9614 3.33323 16.6667V3.33334C3.33323 3.03866 3.45029 2.75604 3.65866 2.54767C3.86704 2.33929 4.14965 2.22223 4.44434 2.22223Z" fill="#7D7D7D"/>
                                    <path d="M11.5997 10.2555C11.6578 10.3053 11.7051 10.3666 11.7384 10.4356C11.7718 10.5045 11.7905 10.5796 11.7935 10.6561C11.7964 10.7326 11.7835 10.8089 11.7556 10.8802C11.7277 10.9515 11.6853 11.0162 11.6311 11.0703C11.577 11.1245 11.5123 11.1669 11.441 11.1948C11.3697 11.2227 11.2934 11.2356 11.2169 11.2327C11.1404 11.2297 11.0653 11.211 10.9964 11.1776C10.9274 11.1443 10.8661 11.097 10.8163 11.0389L7.59968 7.82221L10.8108 4.60554C10.9171 4.51453 11.0538 4.46697 11.1936 4.47237C11.3334 4.47777 11.466 4.53573 11.565 4.63467C11.6639 4.73361 11.7219 4.86625 11.7273 5.00607C11.7327 5.14589 11.6851 5.2826 11.5941 5.38887L9.7219 7.22221H17.7775C17.9248 7.22221 18.0661 7.28074 18.1703 7.38493C18.2745 7.48911 18.333 7.63042 18.333 7.77776C18.333 7.92511 18.2745 8.06641 18.1703 8.1706C18.0661 8.27479 17.9248 8.33332 17.7775 8.33332H9.7219L11.5997 10.2555Z" fill="#7D7D7D"/>
                                    </svg>Выйти
                                </NavLink>
            </div>
          
        </div>
           
                <button>Сбросить</button>
                </div>
            </div>
          <div class={a.d_izbr}>
          
         {
              MasFavourites.map(m=>(
                <CrT  gl_otd = {m.gl_otd}skl={m.imgs} price={m.price} pr_price={m.pr_price}
                otdel={m.otdel}
                ocenk={m.ocenk}
                name={m.name}/>
              ))
            }
      </div>
          {/* <CrTovar/> */}
  </div>
    
    )
        // <div class={a.obf_div}>

        //     <div> 
        //     <h1 class = {a.i}>Избранное</h1>
        //     </div>

        //     <div> 
        //     <section class={a.tovf}>
        //     {
        //       MasFavourites.map(m=>(
        //         <Fav img={m.img} 
        //         price={m.price} 
        //         category={m.category}
        //         ozenka={m.ozenka}/>
        //       ))
        //     }
        //     </section>
        //     </div>

        //     <div>
        //     <img class={a.btnkrup} src="./img/наверх.svg"/>
        //     </div>

        //     <div>
        //     <button class={a.btnkrvnz}><h3 class={a.e}>Ещё</h3>
        //       <svg xmlns="http://www.w3.org/2000/svg" width="8" height="24" viewBox="0 0 8 24" fill="none">
        //       <path id = "Arrow 8.1" d="M3.64645 23.3536C3.84171 23.5488 4.15829 23.5488 4.35355 23.3536L7.53553 20.1716C7.7308 19.9763 7.7308 19.6597 7.53553 19.4645C7.34027 19.2692 7.02369 19.2692 6.82843 19.4645L4 22.2929L1.17157 19.4645C0.976312 19.2692 0.659729 19.2692 0.464467 19.4645C0.269205 19.6597 0.269205 19.9763 0.464467 20.1716L3.64645 23.3536ZM3.5 2.18557e-08L3.5 23L4.5 23L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="#514A7E"/>
        //       </svg>
        //     </button>
        //     </div>

        // </div>
      
    
}

export{PrFavourites}