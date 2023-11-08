
import './App.css';

import { CrMain } from './components/main/main.jsx';
import { CrHeder } from './components/heder/heder.jsx';
import { CrCard } from './components/card/card.jsx';
import { CrKatalog } from './components/katalog/ocn_katal.jsx';
import { CrExt } from './components/exet/ext.jsx';
import { CrRegistr } from './components/exet/registr.jsx';
function App() {
  return (
    <div class="App">
      <div class='div'>
        {/* <CrExt/> */}
        <CrRegistr/>
        {/* <CrHeder/> */}
      {/* <CrMain/> */}
        {/* <CrCard/> */}
        {/* <CrKatalog slk="Главная/Женщинам/Блузки и рубашки "/> */}
      </div>
      
    </div>
  );
}

export default App;
