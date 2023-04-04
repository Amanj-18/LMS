import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link class="navbar-brand" to="/">Learn Online</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/all-courses">Courses</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Teachers</a>
              <ul class="dropdown-menu">
                <li> <Link class="dropdown-item" to="/teacher-login"> Login</Link></li>
                <li><Link class="dropdown-item" to="/teacher-register"> Registeration</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                <li><Link class="dropdown-item" to="/teacher-logout">Logout</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>
              <ul class="dropdown-menu">
                <li> <Link class="dropdown-item" to="/user-login"> Login</Link></li>
                <li><Link class="dropdown-item" to="/user-register"> Registeration</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                <li><Link class="dropdown-item" to="/user-logout">Logout</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
