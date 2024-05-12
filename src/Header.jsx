import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav className="bg-black text-rose-600 p-4">
        {localStorage.getItem("jwt") ? (
          <>
            <div className="flex justify-center text-lg">
              <a className="nav-item bg-black px-3 py-2 hover:bg-white">
                <Link className="nav-link" to="/races">
                  Home
                </Link>
              </a>
              <a className="nav-item  bg-black px-3 py-2 hover:bg-white">
                <LogoutLink />
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center text-lg">
              <a className="nav-item bg-black px-3 py-2 hover:bg-white">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </a>
              <a className="nav-item bg-black px-3 py-2 hover:bg-white">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </a>
              <a className="nav-item  bg-black px-3 py-2 hover:bg-white">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
