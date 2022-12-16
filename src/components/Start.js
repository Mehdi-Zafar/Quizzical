import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate=useNavigate();
    return ( 
        <div className="start-container">
            <div>
                <h1>Quizzical</h1>
            </div>
            <div>
                <p>Lets Test Your Knowledge!</p>
            </div>
            <div>
                <button onClick={()=>navigate("/quiz")}>Start Quiz</button>
            </div>
            <div className="lemonyBg"></div>
            <div className="babyBg"></div>
        </div>
     );
}
 
export default Start;