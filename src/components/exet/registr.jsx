 import { Link, NavLink } from 'react-router-dom'
 import { useState } from "react"
import a from './reg.module.css'
import { render } from '@testing-library/react'
import { Navigate } from 'react-router-dom'
let polz=[]
 function CrRegistr(props){
    // let heder = document.getElementById('heder')
    // heder.style.display='none'
    const [inp1Value,setInp]=useState('')
    const [inp2Value,setInp2]=useState('')
    const [inp3Value,setInp3]=useState('')
    const [inp4Value,setInp4]=useState('')
    const [inp5Value,setInp5]=useState('')
    const [inp6Value,setInp6]=useState('')
    // const [link,setL]=useState('/')
    const [shouldNavigate, setShouldNavigate] = useState(false)
    function SaveUser(i1,i2,i3,i4,i5,i6){
       
        polz.push ({ФИО:i1,pas:i3,tel:i2,adr:i4,elpoch:i5,coment:i6})
    localStorage.setItem("user", JSON.stringify(polz))
        
    }
    if (shouldNavigate) {
        return <Navigate to="/Главная" />;
    }
 
    return(
<div class={a.div}>
    <div class={a.hed}>
    <h1>Регистрация</h1>
       <button class={a.btn_nazad}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10.7831 9.99994L15.3887 5.39438C15.4797 5.2881 15.5272 5.15139 15.5218 5.01157C15.5164 4.87175 15.4585 4.73912 15.3595 4.64018C15.2606 4.54124 15.128 4.48328 14.9881 4.47787C14.8483 4.47247 14.7116 4.52003 14.6053 4.61105L9.99977 9.2166L5.39421 4.60549C5.2896 4.50088 5.14771 4.44211 4.99977 4.44211C4.85182 4.44211 4.70994 4.50088 4.60532 4.60549C4.50071 4.71011 4.44194 4.85199 4.44194 4.99994C4.44194 5.14788 4.50071 5.28977 4.60532 5.39438L9.21643 9.99994L4.60532 14.6055C4.54717 14.6553 4.49993 14.7166 4.46659 14.7855C4.43324 14.8544 4.4145 14.9295 4.41155 15.006C4.40859 15.0825 4.42148 15.1588 4.44941 15.2301C4.47734 15.3014 4.51971 15.3662 4.57385 15.4203C4.62799 15.4744 4.69274 15.5168 4.76403 15.5447C4.83532 15.5727 4.91162 15.5856 4.98813 15.5826C5.06464 15.5796 5.13972 15.5609 5.20864 15.5276C5.27757 15.4942 5.33885 15.447 5.38866 15.3888L9.99977 10.7833L14.6053 15.3888C14.7116 15.4798 14.8483 15.5274 14.9881 15.522C15.128 15.5166 15.2606 15.4586 15.3595 15.3597C15.4585 15.2608 15.5164 15.1281 15.5218 14.9883C15.5272 14.8485 15.4797 14.7118 15.3887 14.6055L10.7831 9.99994Z" fill="#FFFDF5"/>
    </svg></button>
    </div>
      
    <div class={a.inps}>
        <div class={a.inp1}>
                <input type="text" value={inp1Value} onChange={e=>setInp(e.target.value)} placeholder='ФИО'>
                </input>
                <input type="text" value={inp2Value} onChange={e=>setInp2(e.target.value)} placeholder='Контактный телефон'></input>
                <input type="text" value={inp3Value} onChange={e=>setInp3(e.target.value)} placeholder='Пороль'></input>
            </div>
            <div class={a.inp2}>
                <input type="text" value={inp4Value} onChange={e=>setInp4(e.target.value)}placeholder='Полный адрес'></input>
                <input type="text" value={inp5Value} onChange={e=>setInp5(e.target.value)} placeholder='Электронная почта'></input>
                <input type="text" value={inp6Value} onChange={e=>setInp6(e.target.value)} placeholder='Коментарий'></input>
            </div>
          
        </div>
       
        <div>
            
            <button onClick={()=>{
                
                console.log(inp1Value!="" && inp2Value!=="" && inp3Value!=="" && inp4Value!=="" && inp5Value!=="" && inp6Value!=='')
                if(inp1Value!=""&&inp2Value!==""&&inp3Value!==""&&inp4Value!==""&&inp5Value!==""&&inp6Value){
                    props.fun(inp1Value)
                    props.setOpen_(!props.isOpen_)

                    {SaveUser(inp1Value,inp2Value,inp3Value,inp4Value,inp5Value,inp6Value)}
                //    <Navigate to={link}/>
                    
                    setShouldNavigate(true)
                }
                else{
                    alert("Заполните все поля!")
                }
                
            }} class={a.btn_otpr}>Отправить<svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
            <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
            </svg></button>
            <NavLink to='/Вход'>
                <button class={a.btn_vhod}>Войти в кабинет</button></NavLink>
            </div>
       
            <img  class={a.elips}src="/imgs/Ellipse 2 (1).png" alt="" />
</div>
    )
 }
 export{CrRegistr,polz}