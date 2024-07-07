import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from "axios"
function Home() {

  const [users, setUsers] = useState([]);
  

  const getAllUsers = async() =>{
     
     const {data} = await axios.get("http://localhost:3000/validation/getAllUsers",
     {
        withCredentials: true
      }
     )
    console.log(data)
  }

  useEffect(() => {
    getAllUsers();
  },[])
  return (
    <h1>users</h1>
  );
}



export default Home;
