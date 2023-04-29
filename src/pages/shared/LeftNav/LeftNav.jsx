import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [catagories,setcatagories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setcatagories(data))
        .catch(error=>console.log(error))
    },[])
  return (

    <div>
        <h3>All Category</h3>
        {
          catagories.map(catagorie=><p
           key={catagorie.id}
           >
                <Link to={`/catagorie/${catagorie.id}`} className='text-black text-decoration-none'>{catagorie.name}</Link>
            </p>
          )
        }
    </div>
  )
}

export default LeftNav