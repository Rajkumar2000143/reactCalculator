import { useState } from "react"

export default function Forms()
{
    const [name,setname]=useState('')

    const e=(event)=>{
       event.preventDefault();
        setname(event.target.value);
        // console.log(event.target.value)
    }
    
    const [nam,setnam]=useState('')

    const b=(even)=>{
       even.preventDefault();
        setnam(even.target.value);
        // console.log(event.target.value)
    }


    const a=()=>{
        
        setname('')
        
    }
    const c=()=>{
        
        setname('')
        
    }
    return(
        <>

        <h1>FORM IN REACT</h1>

        <h3>name:{name},number:{nam}</h3>
        <form>

        <input type="text" value={name} onChange={e}/> <br/>
        <input type="number" value={nam} onChange={b}/>

        <button onClick={a}>CLick</button>
        <button onClick={c}>CLick</button>
        
        </form>

        </>
    )
}
