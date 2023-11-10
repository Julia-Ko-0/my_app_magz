
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { CrMain } from './components/main/main.jsx';
import { CrHeder } from './components/heder/heder.jsx';
import { CrCard } from './components/card/card.jsx';
import { CrKatalog } from './components/katalog/ocn_katal.jsx';
import { CrExt } from './components/exet/ext.jsx';
import { CrRegistr } from './components/exet/registr.jsx';
import { CrKat_ } from './components/katalog/katalog.jsx';
import { CrTovar } from './components/katalog/tovar.jsx';
function App() {
  
  return (
    //  <div class="App">
    //     <div class='div'>
    //     <CrHeder/>
    //       <div/>
    //       <div/>

    <BrowserRouter>
    <div class="App">
        <div class='div'>
          <CrHeder/>
          {/* <CrMain/> */}
         {/* <CrTovar/> */}
          <Routes>
            <Route path='/' element={<CrMain/>}/>
            <Route path='/Каталог' element={<CrKatalog slk="Главная/Каталог/"/>}/>
            <Route path='/Корзина' element={<CrCard/>}/>
            <Route path='/Каталог/Товар/*' element={<CrTovar/>}/>
          </Routes>
            {/* <CrExt/> */}
            {/* <CrRegistr/> */}
            
        
            {/* <CrCard/> */}
            {/* <CrKatalog slk="Главная/Женщинам/Блузки и рубашки "/> */}
        </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
