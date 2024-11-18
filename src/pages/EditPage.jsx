import React,{useEffect, useState} from 'react'
import {  useParams,useNavigate } from 'react-router-dom';

const EditPage = () => {
    const [input,setInput]=useState("")
    const [todos,setTodos]=useState([] )
    const navigate = useNavigate();


    let {id}=useParams()



    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(data); // Update the todos state
      const todo = data.find((c) => String(c.id) === String(id)); // Find the todo item to edit
      setInput(todo?.todo || ""); // Initialize the input with the existing value
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Update the specific todo item in the todos list
      ///type was differing thats why String used
      const updatedTodos = todos.map((c) => {
        if (String(c.id) === String(id)) {
          return { ...c, todo: input };
        }
        return c;
      });
  
      // Update state and localStorage
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      navigate("/todos"); 
    };

  return (
    <div className='modal_container' >

        <form onSubmit={handleSubmit}>

        <input type='text' className='modal_input'  value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter  what you want to do....'/>
        <div className="modal_btn_container">
            <button className='modal_btn' type='submit' >Ok</button>
            <button  className="modal_btn"   >Cancel</button>
           
           
          
           
        </div>
            
        </form>
       
      
    </div>
  )
}

export default EditPage
