import React, { useEffect, useState } from "react";
function Header() {
    const [apidata,setApidata] = useState([]);
    
    useEffect(()=>{
    fetch('https://api.publicapis.org/entries')
  .then((response) => {
    return response.json()})
  .then((data) => {
    const dataEntry = data.entries ; //name of variable array
    const slicing = dataEntry.slice(0,5)
    const filtering = slicing.filter((items) =>{
      console.log(items.API.length ,"fasdfe");
     return items.API.length > 4;
    });
    setApidata(filtering)  //here we are storing data
})
  .catch(error => console.error(error));
},[])
    return(
        <>
        <div>
        {apidata.map((getdata, index) =>( 
          <div>
        {/* <p key={index}>{getdata.Description}</p> */}
        <p key={index}>{index}   {getdata.API}</p>
          </div>
      ))}
        </div>
        </>
    )
}
export default Header;