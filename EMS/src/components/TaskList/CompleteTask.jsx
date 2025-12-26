import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-none h-full w-[25%] p-5 bg-purple-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm rounded-sm p-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-6'>
                <button className='w-full  bg-green-500'>Completed</button>
            </div>
    </div>
  )
}

export default CompleteTask
