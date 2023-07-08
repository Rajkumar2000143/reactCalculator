import './Btn.css'
import Mapp from './Mapp'
import Calculator from './calculator'
import Crud from './crud'
// import Btn3 from './Btn3'

import Pro from './props/pro'
import Store from './store'

import Use from './use/Use'
import Forms from './use/forms'
import Map from './use/map'
import Newmap from './use/newmap'

import Usestatement from './use/usestatement'

export default function App()
{
  const obj={
    name:'rajkumar',
    dt:'erode',
    sex:'no',
    pn:6382824193
  }
  
  return(
    <>
      <h1>Calculator</h1>
      {/* <Btn3/> */}

    

    {/* <Pro a={obj}/>
    
    <Use/>
    <Usestatement/>
     <Map/>
     <Mapp/>
     <Newmap/> */}
     {/* <Forms/> */}
     <Calculator/>
     <Crud/>
     <Store/>
     

    </>
  )
}