import { Link } from 'react-router-dom';
import {
	LinkContainer,
	MenuLink,
} from './styled-components/index.tsx';

export default function Navbar() {

  return (
    <LinkContainer>
      <MenuLink>
        <Link to='/search'>
          <p>Search</p>
        </Link>
			</MenuLink>
      <MenuLink>
        <Link to='/friends'>
          <p>Friends</p>
        </Link>
			</MenuLink>
      <MenuLink>
        <Link to='/requests'>
          <p>Requests</p>
        </Link>
			</MenuLink>
    </LinkContainer>

  );
}