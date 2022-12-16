import { useEffect, useState,useRef } from "react"

const Question3 = (props) => {

    const entities = {
        '&#039;': "'",
        '&quot;': '"',
      };
      const [ready,setReady] = useState(false)
    const [ans,setans] = useState([
        {Ans:props.data.correct_answer.replace(/(&#?\w+;)/g, match => entities[match]),isClicked:false},
        {Ans:props.data.incorrect_answers[0].replace(/(&#?\w+;)/g, match => entities[match]),isClicked:false},
        {Ans:props.data.incorrect_answers[1].replace(/(&#?\w+;)/g, match => entities[match]),isClicked:false},
        {Ans:props.data.incorrect_answers[2].replace(/(&#?\w+;)/g, match => entities[match]),isClicked:false}
    ])
    const correctAnswer = useRef(props.data.correct_answer.replace(/(&#?\w+;)/g, match => entities[match]))
    const ques = useRef(props.data.question.replace(/(&#?\w+;)/g, match => entities[match]))

    function handleClick(e){
        if(!props.totalScore){
            setans(ans.map(a=>{
                return a.Ans === e.target.textContent ? {...a,isClicked:!a.isClicked} : {...a,isClicked:false}
            })) 
        } 
    }
    
    useEffect(()=>{
        ans.map(a=>{
            if(a.isClicked){
                a.Ans === correctAnswer.current ? props.score3(1) : props.score3(0)
            }
        })
    },[ans])  

    useEffect(()=>{
        setans(prevstate=>prevstate.sort(()=>Math.random()-0.5))
        setReady(true)
    },[])

    return ( 
        <div className="question-template">
                <h2 className="question">{ques.current}</h2>
                <div className="answers">
                    {ready && ans.map((answer)=>(
                        <p 
                        key={answer.Ans}
                        className="answer" 
                        style={{backgroundColor:((props.totalScore !== null && answer.Ans === correctAnswer.current) ? "#90EE90": (props.totalScore !== null && answer.isClicked && answer.Ans !== correctAnswer.current) ? "#F8BCBC" : answer.isClicked ? "#D6DBF5":"#F5F7FB"),border:props.totalScore !== null && answer.Ans === correctAnswer.current ? "#90EE90": answer.isClicked?"1px solid #D6DBF5":"1px solid #4d5b9e"}} 
                        onClick={handleClick}
                        >{answer.Ans}</p>
                    ))}
                </div>
                <div className="border"></div>
            </div>
     );
}
 
export default Question3;