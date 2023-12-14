import axios from "axios";
import React, { useState, useEffect } from "react";
import  { Link } from "react-router-dom";


export default function Read() {
  const [data, setData] = useState([]);
//   const [localStorage, setlocalStorage] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://65794a92f08799dc8046999d.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function handelDelete(id)
  {
    axios.delete(`https://65794a92f08799dc8046999d.mockapi.io/crud/${id}`)
    .then(()=>
    {getData()})
  }
  function UpdateHandler(id) {
    {
  
     var updatedTitle = prompt("Enter updated product title:");
     var updatedPrice = prompt("Enter updated product price:");
 
   
     axios.put('https://65794a92f08799dc8046999d.mockapi.io/crud/' + id, {
         title: updatedTitle,
         price: updatedPrice
       })
       .then(function (response) {
         console.log("Update successful:", response.data);
       
         getData();
      
       })
       .catch(function (error) {
         console.error("Error updating data:", error);
       });
   };
 }
 
 const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  

  return (
    <div>
      <h3 className="card-title">Read</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                    <button className="btn-success" onClick={()=>setLocalStorage(eachData.id,
                        eachData.name,eachData.email)}>Edit</button>
                </Link>
                
              </td>
              <td>
                <button className="btn-danger" onClick={()=>handelDelete(eachData.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
