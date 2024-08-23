import React from 'react'

const JobDescription = () => {
    const isApplied=true

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Job Title</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <span className={'text-blue-700 font-bold'} variant="ghost">Positions</span>
                        <span className={'text-[#F83002] font-bold'} variant="ghost">Job type</span>
                        <span className={'text-[#7209b7] font-bold'} variant="ghost">Salary in LPA</span>
                    </div>
                </div>
                <button
                onClick={isApplied}
                    disabled={isApplied}
                    className={`rounded-lg p-2 ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#3f8da0] hover:bg-[#43a7ba]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply'}
                </button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>JOb title</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Delhi</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Job description</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>Experience yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>salary in LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>100</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>20/08/24</span></h1>
            </div>
        </div>
    )
}

export default JobDescription 