import { Link } from "react-router";
import { NavItems } from "./nav-items";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div>
          <img src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  );
}
