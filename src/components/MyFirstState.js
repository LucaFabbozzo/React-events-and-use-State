import React, { useState } from 'react';

export const MyFirstState = () => {


  const [name, setName] = useState("Luca");

  const changeName = (e, nameFix) => {
    setName(nameFix);
  }



  return (
    <div>
      <h3>Component: MyFirstState</h3>
      <strong className={name.length >= 4 ? 'verde' : 'label'}>{name}</strong>

      &nbsp;
      <button onClick={e => changeName(e, "Francisco")}>
        Change Name
      </button>

      &nbsp;
      <input type="text" onChange={e => changeName(e,  e.target.value)} placeholder="Cambia el nombre" />

    </div>
  );
}
