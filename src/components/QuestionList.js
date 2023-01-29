import React , {useEffect, useState} from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then( list => setQuestionList(list))
  },[])

  function handleQuestionDelete(id){
    const deletedQuestion = questionList.filter(question => question.id !== id )
    setQuestionList(deletedQuestion)
  }
  
  function handleNewAnswer(updatedAnswer){
    const newAnswer = questionList.map(question => {
      if(question.id === updatedAnswer.id){
        return updatedAnswer
      }else {
        return question
      }
    })
      console.log(setQuestionList(newAnswer)) 
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map(question => <QuestionItem key={question.id} question={question} onDeleteQuestion={handleQuestionDelete}  onUpdate={handleNewAnswer}/>)}</ul>
    </section>
  );
}

export default QuestionList;
