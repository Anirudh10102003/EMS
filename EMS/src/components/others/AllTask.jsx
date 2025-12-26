import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1C1C1C] p-5 mt-4 rounded-2xl h-70'>
      <div className='bg-red-400 mb-2 py-2 px-4 rounded-sm flex justify-between'>
                  <h2 className='w-1/5 text-lg font-medium flex justify-center'>Employee Name</h2>
                  <h3 className='w-1/5 text-lg font-medium flex justify-center'>New Task</h3>
                  <h5 className='w-1/5 text-lg font-medium flex justify-center'>Active Task</h5>
                  <h5 className='w-1/5 text-lg font-medium flex justify-center'>Completed</h5>
                  <h5 className='w-1/5 text-lg font-medium flex justify-center'>Failed</h5>
      </div>
      <div className='overflow-auto'>
        {userData.map(function(elem,idx){
          return  <div key={idx} className=' mb-2 py-2 px-4 border border-white-300 rounded-sm flex justify-between'>
                  <h2 className='w-1/5 text-lg font-medium flex justify-center'>{elem.firstName}</h2>
                  <h3 className='w-1/5 text-lg font-medium flex justify-center '>{elem.taskNumbers.newTask}</h3>
                  <h5 className='w-1/5 text-lg font-medium  flex justify-center'>{elem.taskNumbers.active}</h5>
                  <h5 className='w-1/5 text-lg font-medium  flex justify-center'>{elem.taskNumbers.completed}</h5>
                  <h5 className='w-1/5 text-lg font-medium  flex justify-center'>{elem.taskNumbers.failed}</h5>
                  </div>
      })}
      </div>
      
    
    </div>
  )
}

export default AllTask
