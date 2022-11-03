// import React, { useState } from 'react';
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
        <p>You Play: </p>
        <ul>
          {instruments.map((instrument) => (
            <li> {instrument.name} </li>
          ))}
        </ul>
        <p>You Need: </p>
        <ul>
          {needs_instruments.map((instrument) => (
            <li> {instrument.name} </li>
          ))}
        </ul>
        <p>Genres: </p>
        <ul>
          {genres.map((genre) => (
            <li> {genre.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
