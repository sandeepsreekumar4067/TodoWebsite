import { useState , useEffect } from 'react';
import '../style/home.css'
import TaskList from './taskList';

const Home = () => {
    const [task,setTask] = useState('')
    const [taskArray,setTaskArray] = useState([])
    const handleChange = (event)=>{
        setTask(event.target.value)
    }
    const addTask = ()=>{
        if(task.length!=0){
            setTaskArray([...taskArray, task])
            setTask('')
        }
    }
    useEffect(()=>{
        console.log(taskArray);
    },[taskArray,TaskList])
    return ( 
        <div className="homePage">
            <div className="taskContainer">
                <div className="title">TodoWebsite</div>
                <div className="taskInput">
                    <input className='inputText' value={task} type="text" onChange={handleChange} placeholder='Enter the Task here' />
                </div>
                <div className="inputButton">
                    <input type="button" value="Add Task" onClick={
                        ()=>{
                            addTask()
                        }
                    }/>
                </div>
                <div className='seperator'></div>
                <div className="taskList">
                <TaskList taskArray={taskArray}/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;