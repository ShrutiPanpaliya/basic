import "./Style.css";
import {useState ,useRef} from "react";
function Notes() {
  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");
  const messageInput = useRef(null);
  const handleChange=(e)=>
  {
    setNewTask(e.target.value);
   
  };
  const handleKeyDown = event => {
    // console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      AddTask();
      console.log("Enter Key")
    }
  };

 

  const AddTask = ()=>
  {
   
    const data ={
        id:todoList.length===0?1:todoList[todoList.length-1].id+1,
        dataName:newTask,
        completed:false
    };
    const newlist=[...todoList,data];
    setTodoList(newlist);
    messageInput.current.value = '';
    
  };
 
  const deleteTask=(id)=>
  {
    setTodoList(todoList.filter((data)=>data.id !== id))
  };
  const completeTask =(id)=>
  {
    setTodoList(
      todoList.map((data)=>
      {
       if( data.id===id){return{...data,completed:true};}
        else
        { return data;}
      }
      )  
      );
  };
  return (
    <div className="App">
      <div className="AddTask">
        <input onChange={handleChange}  ref={messageInput}  onKeyDown={handleKeyDown}/>
        <button onClick={AddTask} type="submit"> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((data)=> {
            return( <div>
                <h1>{data.dataName}</h1>
                <button style={{backgroundColor:data.completed?"green":"red"}} onClick={()=>completeTask(data.id)}>Complete</button>
                <button onClick={()=>deleteTask(data.id)}>X</button>
                </div>);
        })}
        
      </div>        
      </div>
  );
}

export default Notes;

