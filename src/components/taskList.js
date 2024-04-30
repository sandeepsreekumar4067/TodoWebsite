import '../style/taskList.css'
const TaskList = (props) => {
    const taskArray = props.taskArray
    const deleteFunction = props.deleteFunction
    return ( 
        <div className="taskList">
            {taskArray.map((task,index)=>(
                task.length > 0 &&
                <div className="task" key={index}>
                    <div className="done">
                        <input type="checkbox"></input>
                    </div>
                    <div className='taskName'>{task[0]}</div>
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