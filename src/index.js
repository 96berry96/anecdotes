import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =({text, task})=>(
    <button onClick={task}>
        {text}
    </button>
)



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes ] = useState(Array.from({length: props.anecdotes.length}).fill(0))

  const handleRandomAnectode = () => {
    const random = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(random)
  }

  const handleVote = () => {
      const updatedVotes = votes.map((vote, i) => i === selected ? ++vote: vote)
      setVotes(updatedVotes)
  }

  const mostVoted = () => {
      const max = Math.max(...votes)
      const mostVotedIndex = votes.indexOf(max)
      return props.anecdotes[mostVotedIndex]
  }

  let mostVotes

  if(votes.some(vote => vote !== 0)){
      mostVotes = mostVoted()
  }
  

  return (
    <div>
      {props.anecdotes[selected]} <br />
      <Button text='votes' task={handleVote} />
      <Button text='next anecdote' task={handleRandomAnectode} />
      <br />
      <div>
          <h2>anecdote with most votes</h2>
          <p>{mostVotes}</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


