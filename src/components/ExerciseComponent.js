import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ExerciseComponent = ({ year }) => {
  
  const [yearNow, setYearNow] = useState(year);

  const next = e => {
    setYearNow(yearNow + 1);
  }

  const backward = e => {
    setYearNow(yearNow - 1);
  };

  const changeYear = e => {
    let data = parseInt(e.target.value);

    if (Number.isInteger(data)) {
        setYearNow(data);
    } else {
        setYearNow(year);
    }

  }


  return (
    <div>
      <h2>Exercise with Events and UseState</h2>
      <strong className="label label-green">{yearNow}</strong>
      <p>
        <button onClick={backward}>
          <i className="fa-solid fa-backward"></i>
        </button>
        &nbsp;
        <button onClick={next}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </p>
      <p>Change year:
        <input
          onChange={changeYear}
          type="text"
          placeholder='Change year' />
      </p>
    </div>
  );
}


ExerciseComponent.propTypes = {
  year: PropTypes.number.isRequired
}