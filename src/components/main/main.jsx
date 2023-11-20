import a from './maim.module.css'
import { Text } from './main_text'
import { Top } from './main_top'
import { Ys_kyp } from './main_ysp_kp'
import { CrHeder } from '../heder/heder' 
function CrMain(){
    return(
       
        <div class={a.ob_div}>
             <CrHeder/>
              <Top/>
              <Text/>
              <Ys_kyp/>
        </div>
      
    )
}

export{CrMain}