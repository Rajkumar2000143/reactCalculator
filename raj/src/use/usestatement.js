import { useState } from "react"

export default function Usestatement()
{
    const [number,setname]=useState(0)
    const x=()=>{
        setname(number +1);
        
    };
    // const [num,stname]=useState(0)
    const y=()=>{
        setname(number -1);
    };


    const reset=()=> {
        setname(0);
      

    };    
    
   
    return(
        <>
        <h2>incriment and decrement</h2>
        <h1> {number}</h1>
        {/* <h1> {num}</h1> */}

        <button onClick={x}>clicked:{number}</button>
        <button onClick={y}>clicked</button>

        <button onClick={reset}>reset</button>
        </>
    )
}

























// import { useState } from "react";

// export default function Ipl (){
// const[num,setnum]=useState(
//    [{
//     name:'gopi',
//     age:23,
//     degree:'viscom',
//     portfolio:[
//         {
//             Visual:'photography',
//             video:'short film',
//             audio:'birds sounds',
//         }
//     ]
//    }] 
// )
// const a=()=>{
//     setnum(
//         [{
//          name:'vel',
//          age:24,
//          degree:'b.com',
//          portfolio:[...num,
//              {
//                  Visual:'photography',
//                  video:'short film',
//                  audio:'birds sounds',
//              }
//          ]
//         }] )
// }
  
// return(
//     <div>
//         <h1>object of array</h1>
//         <button onClick={a}>clicked here</button>
//         {num.map((f)=>
//         <p>{f.name}
//         {f.portfolio.map((q)=>
//             <li>
//                     <ol>
//                         <li> {q.Visual}</li>
//                         <li> {q.video}</li>
//                         <li> {q.audio}</li>
//                     </ol>
//             </li>
//              )}</p>
//         )}
//     </div>
// )
// }