import {
  Pointer,
} from './styled-components/index.tsx';

export default function Flag({input, flagColor, backgroundColor}) {
  const {name} = input;
  return(
    <Pointer flagColor={flagColor} backgroundColor={backgroundColor}>
      {name}
    </Pointer>
  );
}