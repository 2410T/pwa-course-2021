import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';

function App(children) 
{
  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          <button>
            Friend List
          </button>
        </Link>
        </div>
        <div className="App-Content">
          <FriendList />
      </div>
    </div>
  );
}

export default App;
