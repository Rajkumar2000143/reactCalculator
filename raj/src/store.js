import axios from "axios";
import { useEffect, useState } from "react";

export default function Store()
{
    const [name,setname]=useState('')
    const a=(event)=>{
        event.preventDefault();
        // console.log("clicked");
        // setname('kalai')
        setname('')
        axios.post('https://648014f3f061e6ec4d488f52.mockapi.io/rajkuma',{uname:name})
    }
    const [view,setview]=useState([]);

    useEffect(()=>{
        axios.get('https://648014f3f061e6ec4d488f52.mockapi.io/rajkuma').then((f)=>{
        // console.log(f.data);
        setview(f.data);

        })
    },[])
    const w=(a)=>{
        setname(a.target.value)
        console.log(a.target.value);
    }
    return(
        <>
        <h2>CRUD</h2>

        <form onSubmit={a}>
            <input type="text" value={name} onChange={w}/><br/>
            <button>Save</button>
        </form>
        
        <table>
            <tr>
                <th>
                    Sno
                </th>
                <th>
                    UserName
                </th>
            </tr>
            {view.map((h)=>
                <tr>
                    <td>{h.id}</td>
                    <td>{h.uname}</td>
                </tr>
            )}
        </table>
        </>
    )
}
