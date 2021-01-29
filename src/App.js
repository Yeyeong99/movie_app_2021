import React from 'react';
import PropTypes from 'prop-types';

const questionList = [
  {
    explanation : "hello",
    detail : "what"
  },
  {
    explanation : "second",
    detail : "second"
  }
]

function Quest({explanation, detail}) {
  return (
    <div>
      <h1>{explanation}</h1>
      <h2>{detail}</h2>
    </div>
  )
}

function App() {

  return (
    <div>
      {questionList.map(quest =>
        <Quest explanation = {quest.explanation} detail = {quest.detail}/>
  
      )}
    </div>
  )
}

export default App;
