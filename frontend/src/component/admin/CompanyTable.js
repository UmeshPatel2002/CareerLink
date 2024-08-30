import React,{useState,useEffect} from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompanyTable = () => {
    
    return (
        <div>
            <table class="w-full">
                <thead >
                    <tr className='flex justify-between'>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th className="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                     <tr  className='flex justify-between'>
                        <td >x</td>
                        <td >y</td>
                        <td >z</td>
                        <td >a</td>
                     </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompanyTable