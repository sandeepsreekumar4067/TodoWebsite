import '../style/home.css'

const Home = () => {
    return ( 
        <div className="homePage">
            <div className="taskContainer">
                <div className="title">TodoWebsite</div>
                <div className="taskInput">
                    <input type="text" placeholder='Enter the Task here' />
                </div>
                <div className="inputButton">
                    <input type="button" value="Add Task"/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;