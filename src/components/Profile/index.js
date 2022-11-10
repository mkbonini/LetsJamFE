// import React, { useState } from 'react';
import InstrumentsFlag from '../Flags/InstrumentFlag';
import NeedsInstrumentsFlag from '../Flags/NeedsInstrumentFlag';
import GenreFlag from '../Flags/GenreFlag';
import Flag from '../Flags/Flag'
import './profile.css'

export default function Profile({ user }) {
  // console.log(user)
  // console.log(user.data)
  // console.log(user.data.attributes.name)
  const {
    name,
    display_email,
    picture_url,
    zipcode,
    instruments,
    needs_instruments,
    genres,
  } = user.data.attributes;
  return (
    <div className="container">
      <img className="avatar" src={picture_url} />
      <div className="details">
        <h1>{name}</h1>
        <p>email: {display_email}</p>
        <p>ZIP code: {zipcode}</p>
        <div className='profile-flags'>
          <div className='profile-flag-containers'>
              {instruments.map((instrument) => (
                <Flag input={instrument} flagColor={"#A8DADC"} backgroundColor={"#FFFFFF"}/> 
              ))}
          </div>
          <div className='profile-flag-containers'>
              {needs_instruments.map((instrument) => (
                <Flag input={instrument} flagColor={"lightcoral"} backgroundColor={"#FFFFFF"}/> 
              ))}
          </div>
          <div className='profile-flag-containers'>
              {genres.map((genre) => (
                <Flag input={genre} flagColor={"lightgrey"} backgroundColor={"#FFFFFF"}/> 
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
