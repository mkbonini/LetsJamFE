import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import Friend from './components/Friend'
import user from './mockData/user.json'
import friend from './mockData/friend.json'

function App() {
  return (
    <div className='main'>
      <div className='side_bar'>
        <Profile user={user}/>
      </div>
      <div className='content'>
        <Friend friend={friend}/>
      </div>
    </div>
  );
}

export default App;
