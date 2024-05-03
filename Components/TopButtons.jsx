import React from 'react'

function TopButtons({setCityName}) {

    const handleClick = (value) => {
        setCityName(value)
    }
  return (
    <>
  <div className='flex items-center justify-around bg-slate-950  top '>
      
      <button onClick={(e)=>handleClick('Indore')} className='text-white text-lg btn '>Indore</button>
      <button  onClick={(e)=>handleClick('Mumbai')}  className='text-white text-lg btn '>Mumbai</button>
      <button onClick={(e)=>handleClick('Pune')} className='text-white text-lg btn '>Pune</button>
      <button onClick={(e)=>handleClick('Bhopal')} className='text-white text-lg btn '>Bhopal</button>
      <button onClick={(e)=>handleClick('Kolkata')} className='text-white text-lg btn '>Kolkata</button>
      <button onClick={(e)=>handleClick('Manali')} className='text-white text-lg btn '>Manali</button>
 
</div> 

    
  </>
  )
}

export default TopButtons