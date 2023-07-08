import { useState } from "react"

export default function Calculator(){

    const [number,setNumber]=useState(0);

    const handleClick=(event)=>{
        const value=event.target.name;
        setNumber(number.concat(value))
    }
    const calculate=()=>
    {
        try{
        setNumber(eval(number).toString());
    }
    catch(err){                                                                                                                                                       
        setNumber('number')
    }
    }
    const clear=()=>{
        setNumber('')
    }
    return(
        
        <div class='a'>
            
        <>
       

            <input type="text" value={number}/><br/>

            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="4">4</button><br/>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button><br/>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={handleClick} name="/">/</button>
            <button onClick={calculate} name="=">=</button><br/>
            <button onClick={clear}name="clear">clear</button>
            <button onClick={handleClick} name="+">+</button>
            <button onClick={handleClick} name="-">-</button>
            <button onClick={handleClick} name="*">*</button><br/>

            </>
            {/* <button on onClick={}>click</button> */}
            
            </div>
    )
}

            
            



            

            
 
