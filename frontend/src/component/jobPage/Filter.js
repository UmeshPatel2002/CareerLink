import React from 'react'

const Filter=()=> {
  return (
    <div className='flex flex-col border rounded-md shadow-md border-gray-100 pl-3 '>
       <div className=''>
            <p>Filter Jobs</p>
            <hr className='shadow-md'/>
       </div>
       <div className='mt-2'>
        <p>Locations</p>
         <input type="radio" id="hydrabad" />
         <label htmlFor="hydrabad">Hydrabad</label><br/>
         <input type='radio' id='delhi'/><label htmlFor="delhi">delhi</label><br/>
         <input type='radio' id='pune'/><label htmlFor="pune">Pune</label><br/>
         <input type='radio'id='mumbai'/><label htmlFor="mumbai">Mumbai</label>
       </div>
       <div className='mt-2'>
        <p>Role</p>
         <input type='radio' id='sde' /><label htmlFor="mumbai">Mumbai</label><br/>
         <input type='radio' id=''/><label htmlFor="mumbai">Frontend developer</label><br/>
         <input type='radio' id=''/><label htmlFor="mumbai">Bakend developer</label><br/>
         <input type='radio'id=''/><label htmlFor="mumbai">UI/UX desiner</label>
       </div>
       <div className='mt-2'>
        <p>Salary</p>
         <input type='radio' id='' /><label htmlFor="mumbai">3-4LPA</label><br/>
         <input type='radio' id=''/><label htmlFor="mumbai">5-8LPA</label><br/>
         <input type='radio' id=''/><label htmlFor="mumbai">8-15LPA</label><br/>
         <input type='radio'id=''/><label htmlFor="mumbai">Above 15LPA</label>
       </div>

    </div>
  )
}

export default Filter