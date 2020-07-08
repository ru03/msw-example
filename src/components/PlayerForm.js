import React, { useState } from 'react';

export const PlayerForm = ({ }) => {
  const [player, setPlayer] = useState({ name: null, number: null, position: 'C' });
  const [submitResponse, setSubmitResponse] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit!!')
    const res = await fetch('/player', {
      method: 'POST',
      body: JSON.stringify(player),
    });
    const data = await res.json();
    setSubmitResponse(data);
  }

  const inputsHandler = (e) => setPlayer({ ...player, [e.target.name]: e.target.value });

  const resetFormHandler = () => {
    setSubmitResponse();
    setPlayer({ name: null, number: null, position: 'C' })
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input name="name" onChange={inputsHandler} />
          <label>Number:</label>
          <input name="number" onChange={inputsHandler} />
          <label>Position:</label>
          <select name="position" onChange={inputsHandler} value={player.position}>
            <option value="G">G</option>
            <option value="F">F</option>
            <option value="PF">PF</option>
            <option value="C">C</option>
          </select>
        </div>
        <button className="submitButton" type="submit">Submit</button>
        <button className="submitButton" type="reset" onClick={resetFormHandler}>Clear</button>
      </form>
      <pre id="json">{JSON.stringify(submitResponse, undefined, 2)}</pre>
    </div>
  )
}

