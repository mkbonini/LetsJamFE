import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import RouteSwitch from './components/RouteSwitch'
import Friend from './components/Friend'
import user from './mockData/user.json'
import friend from './mockData/friend.json'

function App() {
  return (
    <div className='main'>
      <Banner />
      <Navbar />
      <div className='user-content'>
        <div className='side-bar'>
          <Profile user={user}/>
        </div>
        <div className='content'>
          <RouteSwitch />
          {/* <Friend friend={friend}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
