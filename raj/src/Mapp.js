import { useState } from "react"; 

 
export default function Mapp() {
    const [num, setNum] = useState([
      {
        name: 'Rajkumar',
        age: 25,
        degree: 'DCE',
        king: [
          {
            Game: 'tarzon',
            Hobbie: 'sleeping',
            Job: 'developer',
          },
        ],
      },
    ]);
  
    const a = () => {
      setNum([
        {
          name: 'soundhar',
          age: 23,
          degree: 'DEEE',
          king: [
            ...num,
            {
              Game: 'VICE CITY III',
              Hobbie: 'Driving',
              Job: 'SAD',
            },
          ],
        },
      ]);
    };
  
    return (
      <div>
        <h1>Object of array Map functions</h1>
        <button onClick={a}>Clicked here</button>
        {num.map((k) => (
          <p>
            {k.name}
            {k.king.map((a) => (
              <table style={{ border: '1px solid black', margin: '10px' }}>
                <thead>
                  <tr style={{ border: '1px solid black', margin:'10px'}}>
                    <th>Game</th>
                    <th>Hobby</th>
                    <th>Job</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{a.Game}</td>
                    <td>{a.Hobbie}</td>
                    <td>{a.Job}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </p>
        ))}
      </div>
    );
  }
