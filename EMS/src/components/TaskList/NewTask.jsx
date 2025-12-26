import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-none h-full w-[25%] p-5 bg-yellow-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm rounded-sm p-1'>{data.cetegory}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-4'>
                <button className='bg-green-500 p-1.5 rounded-sm'>Accept Task</button>
            </div>
    </div>
  )
}

export default NewTask
