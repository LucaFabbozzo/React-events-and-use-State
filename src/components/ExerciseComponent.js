import React from 'react'

export const ExerciseComponent = ({year}) => {
  return (
    <div>
      <h2>Exercise with Events and UseState</h2>
      <strong className='label label-green'>
          {year}
      </strong>
    </div>
  )
}
