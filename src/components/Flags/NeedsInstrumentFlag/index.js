import './needs_instruments_flag.css'

export default function NeedsInstrumentsFlag({instrument}) {
  const {name} = instrument;
  return(
    <div id='needs_instrument_pointer' title='You Want to Play With'>
      <p id='inner-text'>{name}</p>
    </div>
  );
}