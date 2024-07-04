
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { CrMain } from './components/main/main.jsx';
import { CrHeder } from './components/heder/heder.jsx';
import { CrCard } from './components/card/card.jsx';
import { CrKatalog } from './components/katalog/ocn_katal.jsx';
import { CrExt } from './components/exet/ext.jsx';
import { CrRegistr } from './components/exet/registr.jsx';
import { CrTovar } from './components/katalog/tovar.jsx';
import { CrPoiskKatal } from './components/poisk_katal/poisk_katal.jsx';
import { PrFavourites } from './components/favorit/favr.jsx';
import { useState } from "react"

function App() {
  let polz_dan = JSON.parse(localStorage.getItem('user'))
  let name_=polz_dan[0].ФИО
  const [newName,SetCount]=useState('')

  return (


    <BrowserRouter>
    
        <div class='div'>
          <CrHeder name={newName}/>
        
          <Routes>
          <Route path='/' element={<CrRegistr fun={SetCount}/>}/>
          <Route path='/Вход' element={<CrExt/>}/>
          {/* <Route path='/Главная/*' element={<CrHeder/>}/> */}
            <Route path='/Главная' element={<CrMain/>}/>
            <Route path='/Каталог/*' element={<CrKatalog slk="Главная/Каталог/"/>}/>
            <Route path='/Корзина' element={<CrCard/>}/>
            <Route path='/Каталог/Товар/*' element={<CrTovar/>}/>
            <Route path='/Поиск*' element={ <CrPoiskKatal/>}/>
            {/* <Route path='/Избранное' element={<PrFavourites/>}/> */}
          </Routes>
            {/* <CrExt/> */}
            {/* <CrRegistr/> */}
                                     
        
            {/* <CrCard/> */}
            {/* <CrKatalog slk="Главная/Женщинам/Блузки и рубашки "/> */}
        </div>
      
 
    </BrowserRouter>
  );
}

export default App;
