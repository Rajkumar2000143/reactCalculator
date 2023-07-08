// import { useState } from "react";
export default function Map()
{
    const r=[
        {
        name:'suriya',
        dt:'erode',
        ph:'21345667',
        college:'anna university',
        gender:'male',

    },{
        name:'shiva',
        dt:'erode',
        ph:'21345667',
        college:'anna university',
        gender:'male',

    },{
        name:'sathish',
        dt:'erode',
        ph:'21345667',
        college:'anna university',
        gender:'male',

    }];
    // const[nam,setname]=useState([
    //     {
    //     name:'raj',
    //     age:23,
    //     clg:'RKM',
    //     [{
    //         mom:'thamizharasi',
    //         brother:'Ravikumar',
    //     }]

    //     }
    //     ])
    // const a=()=>{
    //     setname([{
    //         name:'KALAI',
    //         AGE:'25',
    //     }])
    // }
    return(

        <>
        <h1>Map Function</h1>
        
        {/* <button onClick={a}>click</button> */}
        <table>
            <tr>
                <th>Name</th>
                <th>dt</th>
                <th>PH</th>
                <th>College</th>
                <th>gender</th>
            </tr>
            {r.map((e)=>
            
            <tr>
                <td>{e.name}</td>
                <td>{e.dt}</td>
                <td>{e.ph}</td>
                <td>{e.college}</td>
                <td>{e.gender}</td>

            </tr>)}
        </table>
        </>
    )

}

// import { useState } from "react";
// export default function Map();

// {
//     const[name,setname]=useState(['kumar'])
//     const a=()=>{
//         setname (['ram','rajkumar','siva'])
//     }
//     return(
//         <>
//         <button onClick={a}>click</button>
//         {

//         name.map((e)=>
//         <li>
//             {e}
//         </li>
//         )
//     }</>
//     )
// }