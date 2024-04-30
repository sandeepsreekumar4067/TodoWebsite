import '../style/taskList.css'
const TaskList = (props) => {
    const taskArray = props.taskArray

    return ( 
        <div className="taskList">
            {taskArray.map((task,index)=>(
                <div className="task" key={index}>{task}</div>
            ))}
        </div> 
    );
}
 
export default TaskList;