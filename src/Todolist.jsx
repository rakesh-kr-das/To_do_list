import React, {useState} from "react";
function Todolist(){
    const [tasks, setTasks] = useState(["Car", "Bike", "Bus" ]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks( t =>[...t, newTask])
        setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);

    }

//    function editItems =(id) =>{
    
//    }

    // function moveTaskDown(index){

    // }


    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <h4>copyright@Mr.rakesh</h4>

        <div>
            <input 
            className="box-container1"
            type="text"
            placeholder="Enter a Items ..."
            value={newTask}
            onChange={handleInputChange}
             />

             <button className="add-button" onClick={addTask}>
             {/* <Checkbox {...label} disabled checked /> */}
                Add
             </button>
        </div>
        <div className="box-container2">
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    
                    <button className="delete-button"
                    onClick={ () => deleteTask(index)}>
                        Delete
                    </button>
                    
                </li>
            )}
        </ol>
        </div>

    </div>)
}

export default Todolist
