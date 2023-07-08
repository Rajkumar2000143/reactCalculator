export default function Newmap()
{
const a=[{
    name:'rajkumar',
    age:'23',
    gender:'male',

    skills:[{
        programming:'java',
        language:'english',
        hobbies:'editting',
    }]
}]

return(
    <>
    <table>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>gender</th>
            <th>programming</th>
            <th>language</th>
            <th>EDDITING</th>
        </tr>
    
    {
        a.map((i)=>
        <tr>
            <td>{i.name}</td>
            <td>{i.age}</td>
            <td>{i.gender}</td>
            <td>{i.skills[0].programming}</td>
            <td>{i.skills[0].language}</td>
            <td>{i.skills[0].hobbies}</td>
            
            
            
            
        </tr>
        

        )
    }
</table>
    
    </>
)
}