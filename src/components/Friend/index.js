// import React, { useState } from 'react';
import InstrumentsFlag from '../Flags/InstrumentFlag';
import NeedsInstrumentsFlag from '../Flags/NeedsInstrumentFlag';
import GenreFlag from '../Flags/GenreFlag';
import './friend.css'

export default function Friend({ friend }) {
  // console.log(friend)
  // console.log(friend.data)
  // console.log(friend.data.attributes.name)
  const {
    name,
    display_email,
    picture_url,
    zipcode,
    instruments,
    needs_instruments,
    genres,
  } = friend;
  return (
    <div className="friend-container">
      <img className="friend-avatar" src={picture_url} />
      <div className="friend-details">
        <div>
          <h1>{name}</h1>
          <p>email: {display_email}</p>
          <p>ZIP code: {zipcode}</p>
        </div>
        <div>
            {instruments.map((instrument) => (
               <InstrumentsFlag instrument={instrument}/> 
            ))}
        </div>
        <div>
            {needs_instruments.map((instrument) => (
              <NeedsInstrumentsFlag instrument={instrument}/> 
            ))}
        </div>
        <div>
            {genres.map((genre) => (
              <GenreFlag genre={genre}/> 
            ))}
        </div>
      </div>
    </div>
  );
}
