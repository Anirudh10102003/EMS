import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-none h-full w-[25%] p-5 bg-red-500 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-700 text-sm rounded-sm p-1'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                <div className='flex justify-between mt-5'>
                    <button className='bg-green-500 py-1 px-2 text-sm rounded-sm'>Mark as completed</button>
                    <button className='bg-red-800 py-1 px-2 text-sm rounded-sm'>Mark as Failed</button>
                </div>
        </div>
    )
}

export default AcceptTask
