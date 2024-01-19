import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <div>
            <Link to='/'>Full Roster</Link>
            </div>
            <div>
            <Link to='/addplayerform'>Add Player</Link>
            </div>
            <div>
            <Link to='/search'>Search</Link>
            </div>
        </div>
    );
}