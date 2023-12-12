
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
function App() {
  
  return (

    <BrowserRouter>
    
        <div class='div'>
          <CrHeder/>
        
          <Routes>
          <Route path='/' element={<CrRegistr/>}/>
          <Route path='/Вход' element={<CrExt/>}/>
          {/* <Route path='/Главная/*' element={<CrHeder/>}/> */}
            <Route path='/Главная' element={<CrMain/>}/>
            <Route path='/Каталог/*' element={<CrKatalog slk="Главная/Каталог/"/>}/>
            <Route path='/Корзина' element={<CrCard/>}/>
            <Route path='/Каталог/Товар/*' element={<CrTovar/>}/>
            <Route path='/Поиск*' element={ <CrPoiskKatal/>}/>
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
