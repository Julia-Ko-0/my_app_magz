
import './App.css';

import { CrMain } from './components/main/main.jsx';
import { CrHeder } from './components/heder/heder.jsx';

import { CrKatalog } from './components/katalog/ocn_katal.jsx';
function App() {
  return (
    <div class="App">
      <div class='div'>
        <CrHeder/>
      {/* <CrMain/> */}

        <CrKatalog slk="Главная/Женщинам/Блузки и рубашки "/>
      </div>
      
    </div>
  );
}

export default App;
