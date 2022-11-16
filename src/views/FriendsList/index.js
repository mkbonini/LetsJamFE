import user_connections from "../../mockData/user_connections.json"
import Friend from '../../components/Friend'
import './friendslist.css'

export default function FriendsList() {
  const {
    connections_pending,
    requests_pending,
    connections,
  } = user_connections.data.attributes;

  const friends = connections.map((friend) =>
    <li><Friend friend={friend}/></li>
  );
  console.log(connections)
  console.log(user_connections)
  // console.log(friends)
  return(
    <ul>{friends}</ul>
  );
}