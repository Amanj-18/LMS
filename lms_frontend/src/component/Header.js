import { Link } from "react-router-dom";

function Header() {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Learn Online</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-courses">Courses</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Teachers</a>
              <ul className="dropdown-menu">
                {teacherLoginStatus!='true' && <>
                <li> <Link className="dropdown-item" to="/teacher-login"> Login</Link></li>
                <li><Link className="dropdown-item" to="/teacher-register"> Registeration</Link></li></> }
                <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/user-login"> Login</Link></li>
                <li><Link className="dropdown-item" to="/user-register"> Registeration</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
