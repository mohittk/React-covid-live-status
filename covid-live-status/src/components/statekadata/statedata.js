import React, {useEffect,useState} from 'react';

const Statewise = () =>{
    const [data,setData] = useState([]);

    const fetchApiData = async() =>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const time = await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const jytime = await time.json();
        const asliData = await res.json();
        console.log(asliData);
        console.log(jytime);
        
        setData(asliData.statewise);
        
    }
    useEffect(()=>{
        fetchApiData();
    },[]);


    return(
        <>
         <h1 className="main_heading"> 🔴Covid Data live status - India </h1>
         <table>
             <thead className="tablekahead">
  <tr >
    <th>State</th>
    <th>Confimed</th>
    <th>Recovered</th>
    <th>Deaths</th>
    <th>Active</th>
    <th>Updated</th>
  </tr>
  </thead>
  <tbody className="tablekibody">
      {
          data.map((elem, ind)=>{
              return (
                <tr>
                <td className="sthigh">{elem.state}</td>
                  <td>{elem.confirmed}</td>
                  <td>{elem.recovered}</td>
                  <td>{elem.deaths}</td>
                  <td>{elem.active}</td>
                  <td>{elem.lastupdatedtime}</td>
                </tr>
              )
          })
      }
  </tbody>
</table>
        </>
      
    )
}


export default Statewise;