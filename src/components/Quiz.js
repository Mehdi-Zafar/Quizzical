import { useState,useEffect } from "react"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import { useNavigate } from "react-router-dom"
import { Grid } from "react-loader-spinner"
const Quiz = () => {

    const [loading,setLoading] = useState(false)
    const [ques,setQues] = useState(null)
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    const [score3,setScore3] = useState(0)
    const [score4,setScore4] = useState(0)
    const [score5,setScore5] = useState(0)
    const [totalScore,setTotalScore] = useState(null)
    const navigate = useNavigate();
    useEffect(()=>{
            setLoading(true)
            fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
                .then(res => {
                    return res.json();
                })
                .then(data=>{
                    setLoading(false)
                    setQues(data.results)
                })
    },[])

    function formSubmit(e){
        e.preventDefault()
        if(totalScore === null){
            setTotalScore(score1 + score2 + score3 + score4 + score5);
        }else{
            navigate("/")
        }
    }
    

    return (
        <div className="container">
            {
                loading ?
                <div className="grid">
                    <Grid
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                </div>
                :
                <form onSubmit={formSubmit}>
                {ques && <div>
                <Question1 data={ques[0]} score1={setScore1} totalScore={totalScore}/>
                <Question2 data={ques[1]} score2={setScore2} totalScore={totalScore}/>
                <Question3 data={ques[2]} score3={setScore3} totalScore={totalScore}/>
                <Question4 data={ques[3]} score4={setScore4} totalScore={totalScore}/>
                <Question5 data={ques[4]} score5={setScore5} totalScore={totalScore}/>
                </div>}
                <div>
                    {totalScore ? <h2 className="result">You scored {totalScore}/5 correct answers</h2> : totalScore === 0 ?<h2 className="result">You scored 0/5 correct answers</h2>:""}
                    <button className="checkAns">{totalScore ? "Play Again" : totalScore ===0 ? "Play Again" :"Check Answers"}</button>
                </div>
                </form>
            }
            
            <div className="lemonyBg"></div>
            <div className="babyBg"></div>
            <div className="lightBlueBg"></div>
        </div>
     );
}
 
export default Quiz;