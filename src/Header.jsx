import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav>
        {localStorage.getItem("jwt") ? (
          <li className="nav-item">
            <LogoutLink />
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </>
        )}
      </nav>
    </header>
  );
}
