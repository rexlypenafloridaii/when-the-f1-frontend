import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav className="bg-black text-rose-600 p-4">
        {localStorage.getItem("jwt") ? (
          <>
            <a className="nav-item bg-white px-3 py-2 hover:bg-black">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </a>
            <a className="nav-item  bg-white px-3 py-2 hover:bg-black">
              <LogoutLink />
            </a>
          </>
        ) : (
          <>
            <a className="nav-item bg-white px-3 py-2 hover:bg-black">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </a>
            <a className="nav-item bg-white px-3 py-2 hover:bg-black">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </a>
            <a className="nav-item  bg-white px-3 py-2 hover:bg-black">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
