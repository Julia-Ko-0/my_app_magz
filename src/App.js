
import './App.css';

import { CrMain } from './components/main/main.jsx';
import { CrHeder } from './components/heder/heder.jsx';
import { CrCard } from './components/cart/card.jsx';
function App() {
  return (
    <div class="App">
      <div class='div'>
        <CrHeder/>
      {/* <CrMain/> */}
      <CrCard/>
      </div>
      
    </div>
  );
}

export default App;
