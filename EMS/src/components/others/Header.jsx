import React from 'react'

const Header = ({ data, changeUser }) => {

  const username = data?.firstName || 'Admin'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {username} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='bg-red-600 text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header


// import React from 'react'
// import Login from '../Auth/Login'
// import { useState } from 'react'
// import { SetLocalStorage } from '../../utils/localStorage'
// const Header = (props) => {

//   const [username, setusername] = useState('')

//   if(!data){
//     setusername('admin')
//   }
//   else
//     setusername(data.firstName)
//   const logOutUser = ()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
    
//     // window.location.reload()
//   }
//   return (
//     <div className='flex items-center justify-between'>
//       <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username👋</span>  </h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   )
// }

// export default Header
