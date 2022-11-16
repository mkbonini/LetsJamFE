import { Switch, Route } from 'react-router-dom';
import FriendsList from '../../views/FriendsList/index';
// import RequestList from '../../views/RequestList/index';

export default function RouteSwitch() {
	return (
		<Switch>
			<Route path='/search'>
				{/* <OurStory flyoutVisible={flyoutVisible} /> */}
			</Route>
			<Route path='/friends'>
        <FriendsList/>
        </Route>
			<Route path='/requests'>
				{/* <RequestList /> */}
			</Route>
		</Switch>
	);
}
