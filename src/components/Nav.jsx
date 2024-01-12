import React from 'react'
import { NavLink} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  
  

 

  return (
    <div className='bg-black text-white shadow-xl'>
        
      <ul className='flex items-center p-6 m-2  font-bold justify-between text-xl'>
       
        <div>
          <NavLink to="/" ><p>LOGO</p></NavLink>
                 

        </div>
        <div className='flex space-x-8 '>
        {/* <input className='p-1 text-black border-none'
         type='text' 
         placeholder='search for products'
       
         />   */}
        <NavLink to="/"><li>Home</li></NavLink>
        
        <button className='block h-8 w-8 rounded-lg  border-2 '><li><FaShoppingCart fontSize={'25px'} /></li>
        
        </button>
        

        
        </div>
       
        
      </ul>
      
    </div>
  )
}

export default Nav
