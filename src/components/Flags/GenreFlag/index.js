import './genre_flag.css'

export default function GenreFlag({genre}) {
  const {name} = genre;
  return(
    <div id='genre-pointer' title='genre'>
      <p id='inner-text'>{name}</p>
    </div>
  );
}