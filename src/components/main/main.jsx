import a from './maim.module.css'
import { Text } from './main_text'
import { Top } from './main_top'
function CrMain(){
    return(
        <div class={a.ob_div}>
              <Top/>
              <Text/>
        </div>
      
    )
}

export{CrMain}