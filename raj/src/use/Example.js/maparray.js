import { useState } from "react";

export default function Maparray (){
const[num,setnum]=useState(
   [{
    name:'gopi',
    age:23,
    degree:'viscom',
    portfolio:[
        {
            Visual:'photography',
            video:'short film',
            audio:'birds sounds',
        }
    ]
   }] 
)
const a=()=>{
    setnum(
        [{
         name:'vel',
         age:24,
         degree:'b.com',
         portfolio:[...num,
             {
                 Visual:'photography',
                 video:'short film',
                 audio:'birds sounds',
             }
         ]
        }] )
}
  
return(
    <div>
        <h1>object of array</h1>
        <button onClick={a}>clicked here</button>
        {num.map((f)=>
        <p>{f.name}
        {f.portfolio.map((q)=>
            <li>
                    <ol>
                        <li> {q.Visual}</li>
                        <li> {q.video}</li>
                        <li> {q.audio}</li>
                    </ol>
            </li>
             )}</p>
        )}
    </div>
)
}
