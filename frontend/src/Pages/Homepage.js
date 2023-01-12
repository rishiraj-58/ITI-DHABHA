import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
    const [menu, setMenu] = useState([])
    const fetchFoods = async() => {
        const {data} = await axios.get("http://localhost:5002/api/food")

        setMenu(data)
    }

    useEffect(() => {
        fetchFoods()
    }, [])
    
  return (
    <div>
        {menu.map((items)=>(
            <div key={items._id}>{items.name} {items.price} {items.offerPrice} </div>
        ))}
    </div>
  )
}

export default Homepage