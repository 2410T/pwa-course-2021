import { Link } from 'react-router-dom';
import send from './Send.png';

function FriendList() {
    return(
        <div>
            Friend List
            <Link to="/">
                <img src={Send}/>
            </Link>
        </div>
    )
};

export default FriendList;