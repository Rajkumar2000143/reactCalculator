import {useState} from 'react'
export default function Use()
{
    const [name,lastname]=useState('raj    ')
    const h=()=>{
        lastname([...name,"   rajubhai"])
    }
    const [add,address]=useState('add   ')
    const hc=()=>{
        address([...name,"  erode   "])
    }
    
    const [mail,mailid]=useState('mail   ')
    const hclk=()=>{
        mailid([...name,"   rajkumar raj200@gmail"])
    }
    // const [pnumber,number=]=useState('raj.........')
    // const hc=()=>{
    //     phonenumber([...name,"rajubhai"])
    // }
    
    
    
    return(
        <>
        <h2>
            {name}
            {add}
            
            {mail}
            
            {/* {name} */}
            
        </h2>
        <button onClick={h}>click me</button><br/>
        <button onClick={hc}>click me</button><br/>
        <button onClick={hclk}>click me</button><br/>

        </>
    )
}