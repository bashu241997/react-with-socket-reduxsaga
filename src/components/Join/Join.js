import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
const create = (e)=>{
  let n= Math.random()*100000;
  let sd = Math.round(n)
  setRoom(sd)
}
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Ping me</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onClick={create}  onChange={(event) => setName(event.target.value)} />
        </div>
        {/* <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div> */}
        <Link  to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">chat</button>
        </Link>
      </div>
    </div>
  );
}
