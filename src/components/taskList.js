import { useState } from 'react'
import '../style/taskList.css'
const TaskList = (props) => {
    const taskArray = props.taskArray
    const deleteFunction = props.deleteFunction
    const [checkedTask,setCheckedTask] = useState([])
    const handleCheckTick = (index) =>{
        const updatedArray = [...checkedTask]
        updatedArray[index] = !updatedArray[index]
        setCheckedTask(updatedArray)
    }
    return ( 
        <div className="taskList">
            {taskArray.map((task,index)=>(
                task.length > 0 &&
                <div className="task" key={index}>
                    <div className="done">
                        <input type="checkbox" checked={checkedTask[index]} onClick={
                            ()=>{
                                handleCheckTick(index)
                            }
                        }></input>
                    </div>
                    <div className= {`taskName ${checkedTask[index]? 'crossed' : ''}`} >{task[0]}</div>
                    <div className="deleteBtn">
                        <button type="button" onClick={
                            ()=>{
                                deleteFunction(task[1])
                               
                            }
                        } >Delete</button>
                    </div>
                </div>
            ))}
        </div> 
    );
}
 
export default TaskList;