import a from './maim.module.css'
import { Text } from './main_text'
import { Top } from './main_top'
import { Ys_kyp } from './main_ysp_kp'
function CrMain(){
    return(
        <div class={a.ob_div}>
              <Top/>
              <Text/>
              <Ys_kyp/>
        </div>
      
    )
}

export{CrMain}