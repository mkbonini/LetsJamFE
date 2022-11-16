import styled from 'styled-components';


export const LinkContainer = styled.div`
	display: flex;
  flex-direction: row;
	justify-content: space-evenly;
	background-color: #ffffff;
	border-bottom: 1px solid lightgray;
	width: 90%;
	height: 60px;
  padding-left: 10%;
`;

export const MenuLink = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		a {
			font-weight: 700;
		}
	}
	a {
		text-decoration: none;
		color: #000000;
		font-family: 'Baloo 2';
	}
	/* &.desktop {
		@media only screen and (max-width: 900px) {
			display: none;
		}
	} */
`;