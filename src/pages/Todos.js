import React ,{useState} from 'react'
import Clock from './Clock'
import Modal from './Modal'
import "../App.css"
import { useNavigate } from "react-router-dom";



const Todos = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [todos,setTodos]=useState(  JSON.parse(localStorage.getItem("todos")) || [] )
 

  const navigate = useNavigate();



  const openModal=()=>{
    setIsOpen(true)

  }


  const closeModal=()=>{
    setIsOpen(false)
  }



  const handleClick=()=>{
    openModal()
    
  }

  const onClickSubmit=(todo)=>{
    let todoObj={}
    todoObj.id=Date.now();
    todoObj.todo=todo;
    todoObj.isCompleted=false;
    setTodos([...todos,todoObj])
    localStorage.setItem("todos",JSON.stringify([...todos,todoObj]))





  }


  const handleDelete=(id)=>{
    let updatedtodos=todos.filter((c)=>c.id !== id)
    console.log(updatedtodos)
    setTodos(updatedtodos)
    localStorage.setItem("todos",JSON.stringify(updatedtodos))
    

  }

 

  const handleEdit=(id)=>{
    // let  todo=todos.find((C)=>C.id===id)
    // console.log(todo)
    // setNeedToUpdate(todo.todo)
    // openModal()
    navigate(`/todos/${id}`)


    

  }

  


  return (
    <div className='todos'>
        <div className="profile">
            
            <img src="https://as2.ftcdn.net/v2/jpg/09/64/89/19/1000_F_964891988_aeRrD7Ee7IhmKQhYkCrkrfE6UHtILfPp.webp" alt="" />
            <h1>Welcome Back Praveen</h1>
        </div>
        <div className="time_container">
            
            <Clock/>
        </div>
        <div className="tasks_container">
           
            <div className="task_title">
                 <h1 className="task_heading">Tasks List</h1>

            </div>
            <div className="todos_container">

              <Modal  isOpen={isOpen}  onClickModalClose={closeModal}   onClickSubmit={onClickSubmit}  />


              {!isOpen && (
                <div>

               <div className="todos_container_heading">
                <img src="Assests/Vector.svg"  onClick={handleClick} alt="" />
              </div>

             
              <div className="todos_list_container">
                {todos.map((c,i)=>(

                  // <ul>
                  //   <li key={i} >{c.todo}</li>

                  // </ul>
                  <div  key={i} className="todo_list_box">
                    <p>{c.todo}</p>
                    <button className="todo_btn" onClick={()=>handleDelete(c.id)}>❌ </button>
                    <button className="todo_btn" onClick={()=>handleEdit(c.id)}> ✏️</button>
                            

                  </div>
                  
                  
                ))

                }
                    
              
        
              </div>
                  
               </div>
               
              

              )}

              
              
              
              
            </div>
        </div>

        
      
    </div>
  )
}

export default Todos
