import React from 'react'

type props = {
    question : string;
    answers : string[];
    callback : any;
    userAnswer : boolean;
    questionNr : number;
    totalQuestions: number;
}

const QuestionCard : React.FC<props> = ({question ,answers , callback ,userAnswer ,questionNr , totalQuestions })  => {
  return (
    <div>
        <p>
            {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html : question}} />
        <div>
            {/* {
                answers.map((ans) => {
                    return (
                        <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html : ans}}/>
                        </button>
                    </div>
                    )                  
                })
            } */}
        </div>
    </div>
  )
}

export default QuestionCard