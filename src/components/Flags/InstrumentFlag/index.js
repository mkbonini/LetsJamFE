import './instruments_flag.css'

export default function InstrumentsFlag({instrument}) {
  const {name} = instrument;
  return(
    <div id='instrument_pointer' title='You Play'>
      <p id='inner-text'>{name}</p>
    </div>
  );
}