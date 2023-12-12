import a from './maim.module.css'
import { Text } from './main_text'
import { Top } from './main_top'
import { Ys_kyp } from './main_ysp_kp'
import { CrHeder } from '../heder/heder' 
import {Otz_kl} from './main_otz'
import { CrZd_Vp } from './main_zd_vopr'
import { CrSotr } from './m_sotr_s_nami'
import { CrPrPost } from './m_prigl_post'
import { CrPodv } from './m_podv'


function CrMain(){
    return(
       
        <div class={a.ob_div}>
              <Top/>
              <Text/>
              <Ys_kyp/>
              <Otz_kl/>
              <CrZd_Vp/>
              <CrSotr/>
              <CrPrPost/>
              <CrPodv/>
        </div>
      
    )
}

export{CrMain}