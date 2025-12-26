import React from 'react'
import { useState ,useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)


  const [title, settitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [taskAssign, settaskAssign] = useState('')
  const [category, setcategory] = useState('')
  const [taskDescription, settaskDescription] = useState('')

  const [newTask, setnewTask] = useState({})

  const submithandler=(e)=>{
      e.preventDefault()

      setnewTask({title,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

      const data = userData

      data.forEach(function(elem){
        if(taskAssign == elem.firstName){
          elem.tasks.push(newTask)
          elem.taskNumbers.newTask = elem.taskNumbers.newTask+1          
        }
      })
      
      setUserData(data)

      settitle('')
      settaskDescription('')
      settaskDate('')
      setcategory('')
      settaskAssign('')
      
      
      
  }
  return (
    <div className="mt-8">
        <form onSubmit={(e)=>{
          submithandler(e)
        }} className="flex w-full gap-10 bg-[#1C1C1C] p-5 rounded-2xl">
          {/* LEFT SIDE */}
          <div className="w-1/2 space-y-4">
            <div>
              <h3 className="mb-1 text-sm">Task Title</h3>
              <input
                onChange={(e)=>{settitle(e.target.value)}}
                value = {title}
                type="text"
                placeholder="Make a UI design"
                className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder-gray-400 outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm">Date</h3>
              <input
                value={taskDate}
                onChange={(e)=>{
                  settaskDate(e.target.value)
                }}
                type="date"
                className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm">Assign to</h3>
              <input
                value={taskAssign}
                onChange={(e)=>{
                  settaskAssign(e.target.value)
                }}
                type="text"
                placeholder="employee name"
                className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder-gray-400 outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm">Category</h3>
              <input
                value={category}
                onChange={(e)=>{
                  setcategory(e.target.value)
                }}
                type="text"
                placeholder="design, dev, etc"
                className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder-gray-400 outline-none focus:border-green-400"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="mb-1 text-sm">Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e)=>{
                  settaskDescription(e.target.value)
                }}
                rows="10"
                className="w-full resize-none rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm outline-none focus:border-green-400"
              ></textarea>
            </div>

            <button className="mt-6 w-full rounded-md bg-green-500 py-3 text-sm font-medium text-black hover:bg-green-600 transition">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
